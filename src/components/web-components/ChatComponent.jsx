import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const ChatComponent = ({ messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full bg-gray-900/95 backdrop-blur-md rounded-xl border border-gray-800/50 overflow-hidden">
      <ScrollArea.Root className="flex-grow">
        <ScrollArea.Viewport className="h-full w-full">
          <div className="p-4 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800/50 text-gray-100"
                  }`}>
                  {message.content}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-gray-800/50 transition-colors duration-150 ease-out hover:bg-gray-700/50 w-2"
          orientation="vertical">
          <ScrollArea.Thumb className="flex-1 bg-gray-600 rounded-full relative" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <div className="p-4 border-t border-gray-800/50">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
            Send
          </motion.button>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full bg-gray-900/95 backdrop-blur-md rounded-xl border border-gray-800/50 overflow-hidden">
      <ScrollArea.Root className="flex-grow">
        <ScrollArea.Viewport className="h-full w-full">
          <div className="p-4 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800/50 text-gray-100"
                  }`}>
                  {message.content}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-gray-800/50 transition-colors duration-150 ease-out hover:bg-gray-700/50 w-2"
          orientation="vertical">
          <ScrollArea.Thumb className="flex-1 bg-gray-600 rounded-full relative" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800/50">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
            Send
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

ChatComponent.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["user", "ai"]).isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

ChatComponent.defaultProps = {
  messages: [],
};

ChatComponent.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["user", "ai"]).isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

ChatComponent.defaultProps = {
  messages: [],
};

export default ChatComponent;