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

async function tryFetch(videoId: string, lang?: string) {
  if (lang) {
    return YoutubeTranscript.fetchTranscript(videoId, { lang });
  }
  return YoutubeTranscript.fetchTranscript(videoId);
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

    let transcript = null;
    let usedLanguage = "auto";
    let lastError: unknown = null;

    const attempts = ["hi", "en", undefined] as const;

    for (const lang of attempts) {
      try {
        const result = await tryFetch(videoId, lang);
        if (result && result.length > 0) {
          transcript = result;
          usedLanguage = lang ?? "auto";
          break;
        }
      } catch (error) {
        lastError = error;
      }
    }

    if (!transcript || transcript.length === 0) {
      return NextResponse.json(
        {
          error:
            "Transcript not available for this video. Captions may be disabled, unavailable, or blocked.",
          details:
            lastError instanceof Error ? lastError.message : "Unknown error",
        },
        { status: 404 }
      );
    }

    const cleanText = transcript
      .map((t: { text: string }) => cleanTranscriptText(t.text))
      .filter(Boolean)
      .join(" ");

    if (!cleanText) {
      return NextResponse.json(
        { error: "Transcript was fetched but contained no readable text." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      script: cleanText,
      language: usedLanguage,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch transcript.",
        details: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}