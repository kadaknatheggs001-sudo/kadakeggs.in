import { GoogleGenAI } from "@google/genai";

export async function generateHeroImage(prompt?: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt || 'A high-quality, cinematic photograph of a majestic, entirely jet-black Kadaknath chicken (including beak, comb, and feathers) standing next to a rustic nest with eggs. The lighting is dramatic and moody, highlighting the sleek black texture of the chicken against a dark, elegant background. Professional studio lighting, sharp focus, 8k resolution.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Failed to generate hero image via Gemini API:", error);
  }
  
  // Fallback to a high-quality placeholder image if API fails or quota is exceeded
  return 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop';
}
