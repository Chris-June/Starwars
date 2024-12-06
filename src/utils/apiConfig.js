export const getApiKey = () => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OpenAI API key is not configured');
  }
  return apiKey;
};

export const API_ENDPOINTS = {
  chat: "https://api.openai.com/v1/chat/completions",
  speech: "https://api.openai.com/v1/audio/speech"
};