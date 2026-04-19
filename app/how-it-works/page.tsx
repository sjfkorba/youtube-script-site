export default function HowItWorksPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          How <span className="text-red-600">YTTOScript</span> Works
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          3 simple steps to convert any YouTube video into a clean, formatted script. No accounts, no signups, no hassle.
        </p>
      </div>

      {/* Step-by-Step Process */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-all duration-300">
              <span className="text-2xl font-bold text-red-600">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Paste YouTube Link</h3>
            <p className="text-gray-600 leading-relaxed">
              Copy any publicly available YouTube video URL and paste it into our input box. 
              Works with any video that has captions enabled.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group md:col-span-1">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-all duration-300 mx-auto">
              <span className="text-2xl font-bold text-blue-600">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Magic Happens</h3>
            <p className="text-gray-600 leading-relaxed">
              Our AI instantly processes the video captions and generates a clean, 
              formatted transcript in milliseconds.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-all duration-300">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Copy & Use</h3>
            <p className="text-gray-600 leading-relaxed">
              Copy the perfectly formatted script or download as TXT. Ready for blogs, 
              newsletters, social media, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Process Flow */}
      <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-3xl p-12 mb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">The Complete Process</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-red-500">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xl font-bold text-red-600">📺</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">YouTube Video</h4>
                    <p className="text-gray-600">We fetch publicly available captions from YouTube videos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-blue-500">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xl font-bold text-blue-600">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">AI Processing</h4>
                    <p className="text-gray-600">Advanced language models clean, format, and optimize the transcript</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-green-500">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xl font-bold text-green-600">📄</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">Clean Script</h4>
                    <p className="text-gray-600">Perfect for blogs, newsletters, social posts, and content repurposing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-72 h-96 bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl shadow-2xl mx-auto p-8 border-4 border-dashed border-gray-300">
                  <div className="h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl mb-6 shadow-lg"></div>
                  <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded-lg mx-4"></div>
                    <div className="h-6 bg-gray-200 rounded-lg mx-8 w-3/4"></div>
                    <div className="h-6 bg-gray-200 rounded-lg mx-4"></div>
                    <div className="h-6 bg-gray-200 rounded-lg mx-6 w-5/6"></div>
                  </div>
                  <div className="absolute bottom-4 right-4 w-20 h-10 bg-green-500 rounded-xl shadow-lg"></div>
                </div>
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-lg border text-sm font-medium text-gray-700">
                  Instant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Actually Do</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-white transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl font-bold text-blue-600">1️⃣</span>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Fetch Public Captions</h4>
                <p className="text-gray-600">
                  Extract only the publicly available captions/subtitles from YouTube videos. 
                  No video download, no audio processing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-white transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl font-bold text-green-600">2️⃣</span>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">AI Enhancement</h4>
                <p className="text-gray-600">
                  Clean formatting, remove timestamps, fix errors, improve readability 
                  using advanced language processing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-white transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl font-bold text-purple-600">3️⃣</span>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Privacy First</h4>
                <p className="text-gray-600">
                  No storage of URLs, videos, or generated scripts. Everything processed 
                  in memory and deleted immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl border border-indigo-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Supported Features</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-600">✓</span>
              </span>
              <span>100+ languages</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-600">✓</span>
              </span>
              <span>Auto & manual captions</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-600">✓</span>
              </span>
              <span>Shorts & long videos</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-600">✓</span>
              </span>
              <span>Mobile & desktop</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-600">✓</span>
              </span>
              <span>Copy + TXT download</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-black mb-6">Ready to Try?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Paste any YouTube link on the homepage and see the magic happen instantly.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-3 bg-white text-red-600 font-black py-6 px-12 rounded-2xl text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
        >
          🚀 Generate Script Now
        </a>
      </div>
    </main>
  );
}