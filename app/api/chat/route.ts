import { SYSTEM_PROMPT } from "@/data/system-prompt";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { contents } = await req.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY!,
    });

    const stream = await ai.models.generateContentStream({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.4,
      },

      contents,
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.text;
          if (text) {
            controller.enqueue(encoder.encode(text));
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (err) {
    console.error(err);

    return new Response("Error generating response", {
      status: 500,
    });
  }
}
