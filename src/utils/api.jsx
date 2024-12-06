import { toast } from 'sonner';
import { getApiKey, API_ENDPOINTS } from './apiConfig';

export const fetchStreamingResponse = async (input) => {
  try {
    const apiKey = getApiKey();
    const response = await fetch(API_ENDPOINTS.chat, {
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

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to get response");
    }

    return response.body;
  } catch (error) {
    toast.error(`API request failed: ${error.message}`);
    throw error;
  }
};