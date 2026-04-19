// app/api/rewrite-script/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { script, mode = "viral" } = await req.json();

    if (!script || typeof script !== "string") {
      return NextResponse.json(
        { error: "Script is required." },
        { status: 400 }
      );
    }

    const prompt = `
You are a Hindi content rewriting expert.

Rewrite the following transcript in fresh Hindi Devanagari.
Rules:
- Keep the same meaning and story flow.
- Do not copy lines exactly.
- Make it engaging and creator-friendly.
- Add a strong opening hook.
- Keep facts consistent with the original transcript.
- Remove filler and repetition.
- Return valid JSON only.

Mode: ${mode}

Transcript:
${script}
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "object",
              properties: {
                title: { type: "string" },
                hook: { type: "string" },
                intro: { type: "string" },
                main_script: { type: "string" },
                cta: { type: "string" },
              },
              required: ["title", "hook", "intro", "main_script", "cta"],
            },
          },
        }),
      }
    );

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json(
        { error: "Rewrite failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      rewrite: JSON.parse(text),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong while rewriting." },
      { status: 500 }
    );
  }
}