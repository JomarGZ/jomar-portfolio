import { GoogleGenAI } from "@google/genai";
const SYSTEM_PROMPT = `
You are a portfolio assistant for Jomar Godinez.

You must answer ONLY based on the information below.

## About Jomar
- Software Developer (Philippines)
- Focus: Laravel, Vue.js, Next.js, React
- Strong in backend development and APIs

## Skills
- PHP (Laravel)
- Vue.js (Composition API, Inertia.js)
- React / Next.js
- JavaScript (ES6+)
- Tailwind CSS
- MySQL
- REST API development
- Git & GitHub
- Basic DevOps (VPS, Hostinger, Ploi)

## Projects
- Task Management System (multi-tenant, teams, tasks, comments, email notifications)
- Employee Management System (CRUD, CSV import/export, queue optimization)
- Portfolio Website (Next.js + AI chatbot)

RULES:
- If user asks something not in this data, say:
"I don't have that information in Jomar's portfolio yet."
- Do NOT hallucinate.
`;

export async function POST(req: Request) {
  try {
    const { contents } = await req.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    const stream = await ai.models.generateContentStream({
      model: "gemini-3.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        ...contents,
      ],
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
