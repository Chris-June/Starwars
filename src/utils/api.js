import { toast } from 'sonner';

const getApiKey = () => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OpenAI API key is not configured');
  }
  return apiKey;
};

export const fetchStreamingResponse = async (input) => {
  try {
    const apiKey = getApiKey();
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: input }],
        max_tokens: 800,
        stream: true,
      }),
    });

