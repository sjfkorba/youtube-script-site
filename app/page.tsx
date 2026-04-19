"use client";

import { useState, type ReactNode } from "react";
import Script from "next/script";
import {
  Copy,
  Loader2,
  Download,
  Zap,
  Shield,
  Play,
  CheckCircle2,
  Sparkles,
  Wand2,
} from "lucide-react";

type RewriteResult = {
  title: string;
  hook: string;
  intro: string;
  main_script: string;
  cta: string;
};

export default function Home() {
  const [url, setUrl] = useState("");
  const [script, setScript] = useState("");
  const [rewrittenScript, setRewrittenScript] = useState<RewriteResult | null>(null);
  const [videoInfo, setVideoInfo] = useState<{
    title: string;
    thumbnail: string;
    duration: string;
    channel: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [rewriting, setRewriting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [videoValidated, setVideoValidated] = useState(false);

  const fetchVideoInfo = async (_videoId: string) => {
    try {
      const res = await fetch(`/api/video-info?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      if (data.title) {
        setVideoInfo(data);
        setVideoValidated(true);
      }
    } catch {
      // silent fallback
    }
  };

  const fetchScript = async () => {
    if (!url.trim()) {
      alert("Please paste a YouTube URL");
      return;
    }

    setLoading(true);
    setVideoValidated(false);

    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    const videoId = videoIdMatch?.[1];

    if (videoId) {
      await fetchVideoInfo(videoId);
    }

    try {
      const res = await fetch("/api/get-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (data?.script) {
        setScript(data.script);
      } else {
        alert(data?.error || "Something went wrong");
      }
    } catch {
      alert("Failed to fetch script. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const rewriteScript = async () => {
    if (!script) return;

    setRewriting(true);

    try {
      const res = await fetch("/api/rewrite-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ script }),
      });

      const data = await res.json();

      if (data?.rewrite) {
        setRewrittenScript(data.rewrite);
      } else {
        alert(data?.error || "Rewrite failed");
      }
    } catch {
      alert("Rewrite failed. Please try again.");
    } finally {
      setRewriting(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Copy failed. Please select and copy manually.");
    }
  };

  const downloadScript = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(blobUrl);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      {copied && (
        <div className="fixed left-1/2 top-6 z-50 w-96 -translate-x-1/2 animate-slide-down">
          <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-white px-6 py-4 shadow-2xl">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
            <span className="font-semibold text-green-800">Copied to clipboard! ✨</span>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden rounded-4xl border border-red-100 bg-linear-to-br from-red-50/50 via-white to-pink-50/30 px-6 py-14 shadow-[0_25px_80px_rgba(239,68,68,0.15)] md:px-10 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(248,113,113,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-red-200/70 bg-red-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-red-700 shadow-lg backdrop-blur-sm">
            🚀 AI-Powered Creator Tool
          </span>

          <h1 className="mt-8 bg-linear-to-r from-gray-900 via-gray-800 to-red-900 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-6xl lg:text-7xl">
            YouTube को Script बनाएं
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-700 md:text-2xl">
            किसी भी YouTube video का link paste करें और seconds में clean Hindi script पाएं
          </p>

          <div className="mx-auto mt-12 max-w-4xl rounded-[28px] border-2 border-gray-100/50 bg-white/80 p-1 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col gap-3 lg:flex-row">
              <input
                type="url"
                placeholder="यहाँ YouTube URL paste करें... 👇"
                className="h-16 flex-1 rounded-2xl border border-gray-200/50 bg-white px-6 text-lg text-gray-800 outline-none placeholder:text-gray-500 focus:border-red-400 focus:ring-4 focus:ring-red-50/50"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                onClick={fetchScript}
                disabled={loading || !url.trim()}
                className="group relative h-16 min-w-60 rounded-2xl bg-linear-to-r from-red-600 to-red-700 px-8 text-lg font-bold text-white shadow-xl transition-all hover:from-red-700 hover:to-red-800 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 inline h-6 w-6 animate-spin" />
                    Extract कर रहे हैं...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 inline h-6 w-6" />
                    Script Generate करें
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {videoValidated && videoInfo && (
        <section className="mx-auto mt-8 max-w-4xl rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-8">
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <div className="relative shrink-0">
              <img
                src={videoInfo.thumbnail.replace("default.jpg", "maxresdefault.jpg")}
                alt={videoInfo.title}
                className="h-32 w-56 rounded-2xl object-cover shadow-2xl md:h-40 md:w-72"
              />
              <a
                href={`https://youtube.com/watch?v=${url.match(/[^"&?\/\s]{11}/)?.[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute -inset-2 rounded-2xl bg-black/20 opacity-0 transition-all hover:opacity-100"
              >
                <Play className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-white opacity-80 shadow-2xl group-hover:scale-110" />
              </a>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <h3 className="line-clamp-2 text-xl font-bold text-gray-900 lg:text-2xl">
                {videoInfo.title}
              </h3>
              <p className="text-sm text-gray-600">{videoInfo.channel}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>📹 Verified Video</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mt-10">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Sponsored
        </div>

        <div className="rounded-[28px] border border-gray-200/50 bg-white p-6 shadow-lg">
          <div id="container-e7b3fc5bf851fe29e9afa40aad4aeca6"></div>
          <Script
            id="adsterra-native-top"
            strategy="afterInteractive"
            async
            data-cfasync="false"
            src="https://pl29193774.profitablecpmratenetwork.com/e7b3fc5bf851fe29e9afa40aad4aeca6/invoke.js"
          />
        </div>
      </section>

      {script && (
        <section className="mt-10 rounded-4xl border border-gray-200/50 bg-linear-to-br from-white via-gray-50/50 to-white shadow-2xl">
          <div className="flex flex-col gap-6 border-b border-gray-100/50 bg-linear-to-r from-red-50 via-white/80 to-pink-50/50 px-8 py-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 shadow-lg"></div>
                <h2 className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-black text-transparent">
                  Script Ready! ✅
                </h2>
              </div>
              <p className="mt-2 text-lg text-gray-600">Clean Hindi transcript ready है</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
              <button
                onClick={() => copyToClipboard(script)}
                className="group flex items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white px-6 py-3.5 text-lg font-bold text-gray-800 shadow-lg transition-all hover:border-gray-300 hover:shadow-xl"
              >
                <Copy className="h-5 w-5" />
                {copied ? "Copied!" : "Copy Script"}
              </button>

              <button
                onClick={() =>
                  downloadScript(
                    `original-${videoInfo?.title.slice(0, 30) || "transcript"}.txt`,
                    script
                  )
                }
                className="group flex items-center gap-3 rounded-2xl bg-linear-to-r from-gray-900 to-black px-6 py-3.5 text-lg font-bold text-white shadow-2xl transition-all hover:from-gray-800"
              >
                <Download className="h-5 w-5" />
                Download TXT
              </button>
            </div>
          </div>

          <div className="max-h-[50vh] overflow-y-auto px-8 pb-8 pt-4">
            <div className="whitespace-pre-wrap text-[17px] leading-8 text-gray-800">
              {script}
            </div>
          </div>
        </section>
      )}

      {script && !rewrittenScript && (
        <section className="mt-8 rounded-4xl border-2 border-purple-200/60 bg-linear-to-br from-purple-50 to-pink-50/50 p-8 shadow-2xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-purple-500 to-pink-600 p-5 shadow-2xl">
              <Sparkles className="h-10 w-10 text-white" />
            </div>

            <h2 className="mb-4 bg-linear-to-r from-purple-900 to-pink-700 bg-clip-text text-3xl font-black text-transparent">
              ✨ AI Rewrite करें?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-700">
              Same story को fresh words, strong hook और engaging style में बदलें. <strong>नया script, वही content!</strong>
            </p>

            <button
              onClick={rewriteScript}
              disabled={rewriting}
              className="group mx-auto flex items-center gap-4 rounded-3xl bg-linear-to-r from-purple-600 via-pink-600 to-purple-700 px-12 py-6 text-xl font-black text-white shadow-2xl transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {rewriting ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  AI Rewrite कर रहे हैं...
                </>
              ) : (
                <>
                  <Wand2 className="h-6 w-6" />
                  AI से Rewrite करें ✨
                </>
              )}
            </button>

            <p className="mt-6 text-sm text-gray-500">
              Powered by <strong>Google Gemini AI</strong> • Same facts, new engaging style
            </p>
          </div>
        </section>
      )}

      {rewrittenScript && (
        <section className="mt-8 rounded-4xl border border-purple-200/50 bg-linear-to-br from-purple-50/30 via-white to-pink-50/20 shadow-2xl">
          <div className="border-b border-purple-100/50 bg-linear-to-r from-purple-50/70 via-white/90 to-pink-50/50 px-8 py-8">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 animate-pulse rounded-full bg-linear-to-r from-purple-500 to-pink-500 shadow-lg"></div>
              <h2 className="bg-linear-to-r from-purple-900 via-pink-800 to-purple-800 bg-clip-text text-3xl font-black text-transparent">
                ✨ AI Rewritten Script Ready!
              </h2>
            </div>
            <p className="mt-2 text-lg text-gray-700">Same story, fresh words & engaging style</p>
          </div>

          <div className="p-8">
            <div className="mb-8 rounded-2xl bg-linear-to-r from-purple-50 to-pink-50/50 p-6 shadow-lg">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-purple-700">📌 नया Title</h3>
              <div className="text-2xl font-black leading-tight text-gray-900">{rewrittenScript.title}</div>
            </div>

            <div className="mb-8 rounded-2xl border border-purple-100/50 bg-white/80 p-6 shadow-xl">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-purple-700">🎣 Opening Hook</h3>
              <div className="whitespace-pre-wrap text-xl font-semibold leading-relaxed text-gray-900">
                {rewrittenScript.hook}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-purple-100/50 bg-white/70 p-6 shadow-xl">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-purple-700">📖 Intro</h3>
                <div className="whitespace-pre-wrap text-lg leading-relaxed text-gray-800">
                  {rewrittenScript.intro}
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-purple-700">🎬 Main Script</h3>
                <div className="whitespace-pre-wrap rounded-2xl border border-purple-100/30 bg-linear-to-b from-white to-purple-50/30 p-6 text-lg leading-relaxed text-gray-800 shadow-xl">
                  {rewrittenScript.main_script}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-200/50 bg-linear-to-r from-emerald-50 to-green-50/50 p-6 shadow-xl">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-700">🚀 Call to Action</h3>
              <div className="whitespace-pre-wrap text-xl font-semibold leading-relaxed text-gray-900">
                {rewrittenScript.cta}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  copyToClipboard(
                    [
                      rewrittenScript.title,
                      rewrittenScript.hook,
                      rewrittenScript.intro,
                      rewrittenScript.main_script,
                      rewrittenScript.cta,
                    ].join("\n\n")
                  )
                }
                className="group flex items-center gap-3 rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-8 py-4 text-lg font-bold text-emerald-800 shadow-lg transition-all hover:border-emerald-400 hover:bg-emerald-100"
              >
                <Copy className="h-5 w-5" />
                Copy Full Rewrite
              </button>

              <button
                onClick={() =>
                  downloadScript(
                    "ai-rewritten-script.txt",
                    [
                      rewrittenScript.title,
                      rewrittenScript.hook,
                      rewrittenScript.intro,
                      rewrittenScript.main_script,
                      rewrittenScript.cta,
                    ].join("\n\n")
                  )
                }
                className="group flex items-center gap-3 rounded-2xl bg-linear-to-r from-emerald-600 to-emerald-700 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:from-emerald-700"
              >
                <Download className="h-5 w-5" />
                Download Rewrite
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="mt-12">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Sponsored Content
        </div>

        <div className="rounded-[28px] border border-gray-200/50 bg-white p-8 shadow-xl">
          <div id="container-e7b3fc5bf851fe29e9afa40aad4aeca6-bottom"></div>
          <Script
            id="adsterra-native-bottom"
            strategy="afterInteractive"
            async
            data-cfasync="false"
            src="https://pl29193774.profitablecpmratenetwork.com/e7b3fc5bf851fe29e9afa40aad4aeca6/invoke.js"
          />
        </div>
      </section>

      <section className="mt-20 grid gap-8 md:grid-cols-3">
        {[
          {
            icon: <Zap className="h-12 w-12 text-yellow-500 drop-shadow-lg" />,
            title: "⚡ Ultra Fast",
            desc: "2-5 seconds में script ready",
          },
          {
            icon: <Shield className="h-12 w-12 text-green-500 drop-shadow-lg" />,
            title: "🔒 Private",
            desc: "100% secure, कोई data save नहीं होता",
          },
          {
            icon: <Sparkles className="h-12 w-12 text-purple-500 drop-shadow-lg" />,
            title: "✨ AI Rewrite",
            desc: "Gemini AI से fresh script बनाएं",
          },
        ].map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative rounded-4xl border border-gray-100/50 bg-white p-10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-red-200/50 hover:shadow-2xl hover:shadow-red-100/50">
      <div className="absolute inset-0 rounded-4xl bg-linear-to-r from-red-50/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-gray-50 to-gray-100 shadow-lg group-hover:shadow-xl">
        {icon}
      </div>
      <h3 className="mb-4 text-2xl font-black text-gray-900 transition-all group-hover:text-red-600">
        {title}
      </h3>
      <p className="text-lg leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}