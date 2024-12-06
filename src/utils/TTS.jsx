import { toast } from 'sonner';
import { getApiKey, API_ENDPOINTS } from './apiConfig';

export const fetchTTSAudio = async (text) => {
  try {
    const apiKey = getApiKey();
    const response = await fetch(API_ENDPOINTS.speech, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        text: text,
        voice: "nova",
        model: "tts-1",
        response_format: "mp3"
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to generate audio");
    }

    const audioBlob = await response.blob();
    return URL.createObjectURL(audioBlob);
  } catch (error) {
    toast.error(`Audio generation failed: ${error.message}`);
    throw error;
  }
};