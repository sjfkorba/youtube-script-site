export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          About <span className="text-red-600">YTTOScript</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Built for creators who want to repurpose YouTube content instantly, 
          without the hassle of manual transcription.
        </p>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We believe every YouTube creator deserves tools that save time and unlock 
            new content opportunities. YTTOScript eliminates hours of manual work, 
            letting you focus on creating, not transcribing.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-2xl">
              <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-xl font-bold text-red-600">⚡</span>
              </span>
              <div>
                <h4 className="font-bold text-lg mb-1">Lightning Fast</h4>
                <p className="text-gray-600 text-sm">Scripts in seconds</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl">
              <span className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-xl font-bold text-blue-600">🔒</span>
              </span>
              <div>
                <h4 className="font-bold text-lg mb-1">Zero Storage</h4>
                <p className="text-gray-600 text-sm">No data saved ever</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-80 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-3xl shadow-2xl border-4 border-white/50 backdrop-blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 via-transparent to-blue-400/30 rounded-3xl blur-xl"></div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-8 mb-24 p-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl">
        <div className="text-center">
          <div className="text-4xl font-black text-red-600 mb-2">1M+</div>
          <div className="text-gray-600 font-medium">Scripts Generated</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-blue-600 mb-2">100+</div>
          <div className="text-gray-600 font-medium">Languages</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-green-600 mb-2">0s</div>
          <div className="text-gray-600 font-medium">Avg Processing Time</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-purple-600 mb-2">100%</div>
          <div className="text-gray-600 font-medium">Privacy Guaranteed</div>
        </div>
      </div>

      {/* Team/Founder */}
      <div className="text-center mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Built by Creators, For Creators</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            YTTOScript was created by content creators who were tired of spending hours 
            manually transcribing videos for blog posts, newsletters, and social content.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sharma Motocorp</h3>
              <p className="text-gray-600 mb-6">
                Full-stack developer & entrepreneur from Korba, Chhattisgarh. 
                Building tools that save creators time.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://rentgaadi.in" className="text-red-600 hover:text-red-700 font-semibold">RentGaadi.in</a>
                <span className="text-gray-400">|</span>
                <a href="mailto:support@yttoscript.com" className="text-gray-700 hover:text-gray-900">Contact</a>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl shadow-xl border border-red-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why We Built This</h4>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center gap-2">✅ No manual transcription</li>
                <li className="flex items-center gap-2">✅ Instant results</li>
                <li className="flex items-center gap-2">✅ Complete privacy</li>
                <li className="flex items-center gap-2">✅ Works everywhere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-black mb-6">Join Thousands of Creators</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Start repurposing your YouTube content today.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-3 bg-white text-red-600 font-black py-6 px-12 rounded-2xl text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
        >
          🚀 Try YTTOScript Now
        </a>
      </div>
    </main>
  );
}