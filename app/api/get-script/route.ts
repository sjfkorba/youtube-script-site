import { YoutubeTranscript } from "youtube-transcript";
import { NextResponse } from "next/server";

function extractVideoId(url: string): string | null {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function cleanTranscriptText(text: string): string {
  return text
    .replace(/&amp;#39;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "YouTube URL is required." },
        { status: 400 }
      );
    }

    const videoId = extractVideoId(url);

    if (!videoId) {
      return NextResponse.json(
        { error: "Invalid YouTube URL provided." },
        { status: 400 }
      );
    }

    let transcript;

    try {
      transcript = await YoutubeTranscript.fetchTranscript(videoId, {
        lang: "hi",
      });
    } catch {
      transcript = await YoutubeTranscript.fetchTranscript(videoId);
    }

    const cleanText = transcript
      .map((t: { text: string }) => cleanTranscriptText(t.text))
      .join(" ");

    return NextResponse.json({
      script: cleanText,
      language: "hi",
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Hindi transcript not available. Ensure the video has captions enabled.",
      },
      { status: 500 }
    );
  }
}