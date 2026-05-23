import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { contents } = await req.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
    });

    const text =
      response.candidates?.[0]?.content?.parts
        ?.map((p: any) => p.text)
        .join("") || "No response";

    return Response.json({ text });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}
