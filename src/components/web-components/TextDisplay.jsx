import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import Slider from "../ui/Slider";
import { fetchTTSAudio } from "../../utils/TTS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faSync,
} from "@fortawesome/free-solid-svg-icons";

const TextDisplay = ({ userInput, aiResponse, onSubmit }) => {
  const [displayText, setDisplayText] = useState(userInput + aiResponse);
  const inputRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100); // Default to 100%
  const audioRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const formattedText = formatStoryText(userInput, aiResponse);
    setDisplayText(formattedText);
  }, [userInput, aiResponse]);

  const formatStoryText = (userText, aiText) => {
    if (!userText && !aiText) return "";
    return `${userText}${aiText}`;
  };

  const handleInput = () => {
    const text = inputRef.current.innerText;
    setIsTyping(true);
    toast.loading("Crafting your story...", { duration: 1500 });

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const trimmedText = text.trim();
      if (trimmedText !== "") {
        onSubmit(text);
        setIsTyping(false);
      }
    }, 1500); // Reduced delay for better responsiveness
  };

  const startPlayback = async () => {
    if (audioRef.current) {
      audioRef.current.pause();
      URL.revokeObjectURL(audioRef.current.src);
      audioRef.current.currentTime = 0;
    }

    try {
      const audioSrc = await fetchTTSAudio(displayText);
      if (!audioSrc) {
        throw new Error("No audio source generated");
      }

      const audioElement = new Audio(audioSrc);
      audioRef.current = audioElement;
      audioElement.volume = volume / 100; // Set initial volume
      audioElement.play();
      setIsPlaying(true);

      audioElement.addEventListener('ended', () => {
        URL.revokeObjectURL(audioSrc);
        setIsPlaying(false);
      });
    } catch (error) {
      toast.error(`Failed to play audio: ${error.message}`);
    }
  };

  const pausePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const value = Number(e.target.value); // Ensure the value is a number
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value / 100; // Adjust volume
    }
  };

  const incrementVolume = () => {
    setVolume((prevVolume) => Math.min(prevVolume + 10, 100));
  };

  const decrementVolume = () => {
    setVolume((prevVolume) => Math.max(prevVolume - 10, 0));
  };

  return (
    <div className="flex flex-col h-full text-display">
      <motion.div
        className="text-content relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative">
          <div
            ref={inputRef}
            contentEditable
            className={`story-input prose prose-invert max-w-none ${
              isTyping ? "typing" : ""
            }`}
            onInput={handleInput}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                const text = inputRef.current.innerText;
                if (text.trim()) {
                  onSubmit(text);
                  setIsTyping(false);
                }
              }
            }}
            onPaste={(e) => {
              e.preventDefault();
              const text = e.clipboardData.getData("text/plain");
              document.execCommand("insertText", false, text);
            }}
            dangerouslySetInnerHTML={{ __html: displayText || "<br>" }}
          />
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="typing-indicator"
              >
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center mb-4">
          <button
            onClick={startPlayback}
            className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
          <button
            onClick={stopPlayback}
            className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors ml-2"
          >
            <FontAwesomeIcon icon={faStop} />
          </button>
          <button
            onClick={stopPlayback}
            className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors ml-2"
          >
            <FontAwesomeIcon icon={faSync} />
          </button>
        </div>
        <div className="flex items-center mb-2">
          <span>{volume}%</span>
        </div>
        <div className="flex items-center">
          <button onClick={decrementVolume} className="icon-button">
            -
          </button>
          <Slider value={volume} onChange={handleVolumeChange} />
          <button onClick={incrementVolume} className="icon-button ml-2">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

TextDisplay.propTypes = {
  userInput: PropTypes.string.isRequired,
  aiResponse: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TextDisplay;