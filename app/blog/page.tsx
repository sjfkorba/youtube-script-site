import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const siteUrl = "https://yourdomain.com";
const pageUrl = `${siteUrl}/blog/youtube-video-to-text`;
const title = "YouTube Video to Text: Convert Any YouTube Video into a Clean Script";
const description =
  "Convert any YouTube video to text in seconds. Learn how YouTube transcript tools work and turn videos into readable scripts, blog posts, subtitles, and Hindi content.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "youtube video to text",
    "youtube transcript generator",
    "convert youtube video to text",
    "youtube video to script",
    "extract text from youtube video",
    "youtube transcript in hindi",
    "video to text converter for youtube",
  ],
  alternates: {
    canonical: "/blog/youtube-video-to-text",
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "article",
    siteName: "YT To Script AI",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "YouTube Video to Text Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-image.jpg`],
  },
};

function BannerAd({
  adKey,
  width,
  height,
  scriptId,
  label = "Sponsored",
}: {
  adKey: string;
  width: number;
  height: number;
  scriptId: string;
  label?: string;
}) {
  return (
    <div className="my-10">
      <div className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
        {label}
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-3 shadow-sm">
        <div
          className="mx-auto flex items-center justify-center overflow-hidden"
          style={{ width, maxWidth: "100%", minHeight: height }}
        >
          <Script
            id={`${scriptId}-config`}
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : '${adKey}',
                  'format' : 'iframe',
                  'height' : ${height},
                  'width' : ${width},
                  'params' : {}
                };
              `,
            }}
          />
          <Script
            id={`${scriptId}-invoke`}
            strategy="afterInteractive"
            src={`https://www.highperformanceformat.com/${adKey}/invoke.js`}
          />
        </div>
      </div>
    </div>
  );
}

export default function YoutubeVideoToTextBlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: [`${siteUrl}/og-image.jpg`],
    mainEntityOfPage: pageUrl,
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
    author: {
      "@type": "Organization",
      name: "YT To Script AI",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "YT To Script AI",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
  };

  return (
    <main className="bg-white text-gray-900">
      <Script
        id="youtube-video-to-text-blog-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-16">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-red-600">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">YouTube Video to Text</span>
        </nav>

        <header className="rounded-[2rem] border border-red-100 bg-gradient-to-br from-red-50 via-white to-pink-50 px-6 py-10 shadow-lg md:px-10 md:py-14">
          <div className="mb-4 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
            SEO Blog Guide
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
            YouTube Video to Text: Convert Any YouTube Video into a Clean Script
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700 md:text-xl">
            Learn how to convert a YouTube video into readable text, why transcripts matter,
            and how creators can turn video content into scripts, blogs, subtitles, and Hindi content.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>Published: April 20, 2026</span>
            <span>•</span>
            <span>Updated for creators and SEO</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-2xl bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-red-700"
            >
              Try the Tool
            </Link>
            <Link
              href="/blog"
              className="rounded-2xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-800 transition hover:border-gray-400"
            >
              More Blog Posts
            </Link>
          </div>
        </header>

        {/* Ad 1: Top banner after hero */}
        <BannerAd
          adKey="ad5bcbbc1df6018f5970f337f0bba5d6"
          width={728}
          height={90}
          scriptId="blog-top-banner"
        />

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-black text-gray-900">Quick answer</h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            YouTube video to text means converting the spoken content of a YouTube video into readable text.
            This text can be used as a transcript, script, subtitle draft, blog material, or research note.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            A good transcript tool saves time, improves accessibility, and helps creators reuse one video
            across multiple formats like blog posts, captions, newsletters, and Hindi scripts.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-black text-gray-900">What does YouTube video to text mean?</h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-gray-700">
            <p>
              YouTube video to text simply means extracting the spoken content from a YouTube video
              and converting it into readable text format. This output is usually called a transcript.
            </p>
            <p>
              Once the transcript is available, it becomes much easier to read, edit, search, summarize,
              translate, and repurpose the content for other platforms.
            </p>
          </div>
        </section>

        {/* Ad 2: In-content medium rectangle */}
        <BannerAd
          adKey="ad5bcbbc1df6018f5970f337f0bba5d6"
          width={300}
          height={250}
          scriptId="blog-middle-rectangle-1"
        />

        <section className="mt-10">
          <h2 className="text-3xl font-black text-gray-900">
            Why people convert YouTube videos to text
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Create blog posts from video content.",
              "Make notes quickly without rewatching the full video.",
              "Prepare subtitles and captions.",
              "Rewrite scripts for shorts, reels, and voiceovers.",
              "Convert content into Hindi-friendly script format.",
              "Improve accessibility for more users.",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-lg text-gray-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-black text-gray-900">
            How a YouTube transcript generator works
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-gray-700">
            <p>
              In most cases, the process is simple. You paste the video URL, the tool extracts the
              transcript, and then it shows the text in a clean and readable format.
            </p>
            <p>
              Some tools also offer copy, download, and AI rewrite options so that the transcript becomes
              more useful for creators, bloggers, and educators.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-black text-gray-900">
            Best uses of YouTube video to text
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-8 text-gray-700">
            <div>
              <h3 className="text-xl font-black text-gray-900">1. Turn videos into blog posts</h3>
              <p className="mt-2">
                A single informative video can be transformed into a long-form SEO article with headings,
                summaries, examples, and FAQs. This helps creators reach search traffic beyond YouTube.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900">2. Create Hindi scripts</h3>
              <p className="mt-2">
                Raw transcript text can be cleaned and rewritten into natural Hindi for voiceovers,
                narration, teleprompter use, and educational content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900">3. Write captions and subtitles</h3>
              <p className="mt-2">
                Transcript text gives you a strong starting point for subtitle editing and short-form
                caption writing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900">4. Save time in research</h3>
              <p className="mt-2">
                Instead of rewatching a long video again and again, users can scan the text, find important
                parts, and collect notes faster.
              </p>
            </div>
          </div>
        </section>

        {/* Ad 3: In-content banner before FAQ */}
        <BannerAd
          adKey="ad5bcbbc1df6018f5970f337f0bba5d6"
          width={728}
          height={90}
          scriptId="blog-middle-banner-2"
        />

        <section className="mt-10">
          <h2 className="text-3xl font-black text-gray-900">
            YouTube video to text for creators and marketers
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-gray-700">
            <p>
              For creators, a transcript is more than just text. It is a reusable content asset that can be
              turned into blog posts, descriptions, hooks, email content, short scripts, and repurposed posts.
            </p>
            <p>
              For marketers, transcripts also help extract messaging, value points, and CTA language from
              long-form videos in a much faster way.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-black text-gray-900">YouTube video to text in Hindi</h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-gray-700">
            <p>
              Hindi creators often need a transcript that is easy to read and easy to speak.
              A clean Hindi-ready script is especially useful for education channels, voiceover videos,
              news-style videos, documentary content, and short-form narration.
            </p>
            <p>
              That is why transcript quality matters. Raw auto text is not enough unless it can be cleaned,
              structured, and rewritten into creator-friendly language.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-black text-gray-900">
            How to convert a YouTube video to text in seconds
          </h2>
          <ol className="mt-6 space-y-4 text-lg leading-8 text-gray-700">
            <li>1. Copy the YouTube video link.</li>
            <li>2. Paste the URL into the tool.</li>
            <li>3. Generate the transcript.</li>
            <li>4. Copy or download the text output.</li>
            <li>5. Rewrite it into a blog, script, subtitle, or Hindi version if needed.</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-black text-gray-900">
            Why transcript-based pages can drive organic traffic
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-8 text-gray-700">
            <p>
              Search engines understand text more easily than video-only content. That is why transcript-based
              educational pages can help cover more keywords and answer more specific user questions.
            </p>
            <p>
              When a creator publishes useful blog content around transcript and script workflows, that site
              can attract users searching for solutions, not just branded traffic.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-black text-gray-900">FAQ</h2>
          <div className="mt-6 space-y-5">
            {[
              {
                q: "Can I convert a YouTube video to text for free?",
                a: "Yes, many tools offer free or freemium transcript extraction features depending on the output format and limits.",
              },
              {
                q: "Can I use a YouTube transcript for blog writing?",
                a: "Yes, a transcript works very well as source material for a blog post, but it should be cleaned and structured for better readability.",
              },
              {
                q: "Is YouTube video to text useful for SEO?",
                a: "Yes, text-based content can help search engines understand the topic better and support long-tail keyword visibility.",
              },
              {
                q: "Can I turn transcript text into a Hindi script?",
                a: "Yes, transcript text can be rewritten into clear Hindi for narration, teaching, and creator-focused content.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-black text-gray-900">{item.q}</h3>
                <p className="mt-2 text-lg leading-8 text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ad 4: Bottom banner before CTA */}
        <BannerAd
          adKey="ad5bcbbc1df6018f5970f337f0bba5d6"
          width={300}
          height={250}
          scriptId="blog-bottom-rectangle"
        />

        <section className="mt-12 rounded-[2rem] border border-red-200 bg-gradient-to-r from-red-50 via-white to-red-50 px-6 py-8 shadow-lg md:px-10">
          <h2 className="text-3xl font-black text-gray-900">
            Convert any YouTube video into clean text now
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-700">
            Paste any YouTube link, generate a clean transcript, and turn it into a reusable script,
            blog draft, subtitle base, or Hindi content in seconds.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-2xl bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-red-700"
            >
              Open the Tool
            </Link>
            <Link
              href="/blog"
              className="rounded-2xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-800 transition hover:border-gray-400"
            >
              Explore More Blogs
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}