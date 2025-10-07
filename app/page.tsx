export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Completely New Design */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
            TELLURIDE HOCKEY
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-300">
            Skills Camp 2024
          </h2>
          <p className="text-2xl mb-8 font-semibold">
            December 20-21 & 27-28 • Hanley Rink
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-3xl font-bold mb-4">$190 per player</p>
            <p className="text-xl mb-6">Two 75-minute sessions • Ages 6U-19U</p>
            <a
              href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
              target="_blank"
              className="bg-yellow-400 text-black px-12 py-4 rounded-full font-black text-2xl hover:bg-yellow-300 transition-all transform hover:scale-105 inline-block"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Card Layout */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Why Choose Our Camp?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4">🏒</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Elite Training</h3>
              <p className="text-gray-700">High-tempo drills focused on skating, shooting, passing, and stickhandling</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">College Coaches</h3>
              <p className="text-gray-700">Learn from current NCAA players and experienced youth coaches</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Small Groups</h3>
              <p className="text-gray-700">More individual attention and feedback for maximum improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section - Timeline Style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Camp Schedule</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">Weekend 1: December 20-21</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg">6U & 8U</h4>
                  <p>Sat 8:45am • Sun 9:00am</p>
                </div>
                <div className="bg-white/20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg">10U</h4>
                  <p>Sat 12:00pm • Sun 10:30am</p>
                </div>
                <div className="bg-white/20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg">19U</h4>
                  <p>Sat 1:30pm • Sun 12:00pm</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">Weekend 2: December 27-28</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg">12U</h4>
                  <p>Sat 8:45am • Sun 9:00am</p>
                </div>
                <div className="bg-white/20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg">14U</h4>
                  <p>Sat 12:00pm • Sun 10:30am</p>
                </div>
                <div className="bg-white/20 p-4 rounded-xl">
                  <h4 className="font-bold text-lg">19U</h4>
                  <p>Sat 1:30pm • Sun 12:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section - Modern Cards */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Meet Your Coaches</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-3xl">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=200&q=80"
                  alt="Johno Hoins"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-2xl"
                />
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-yellow-300">Johno Hoins</h3>
                  <p className="text-lg leading-relaxed">
                    Center born in Telluride, now playing NCAA hockey at Manhattanville University. 
                    Assistant coach for U16 team in Mamaroneck, NY. Trains with Paul Vincent Hockey 
                    - known for developing NHL and college talent.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-teal-700 p-8 rounded-3xl">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="https://images.unsplash.com/photo-1558898479-33c005b4f27b?auto=format&fit=crop&w=200&q=80"
                  alt="Justin Fernet"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-2xl"
                />
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-yellow-300">Justin Fernet</h3>
                  <p className="text-lg leading-relaxed">
                    Defenseman from Sherbrooke, QC. Now at Manhattanville University. 
                    Coaches with Académie CCM in Sherbrooke and Euro Hockey / Eric Nates 
                    Hockey in the New York area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-6xl font-black mb-8">READY TO REGISTER?</h2>
          <p className="text-3xl font-bold mb-8">$190 per player • Limited spots available</p>
          <a
            href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
            target="_blank"
            className="bg-white text-orange-600 px-16 py-6 rounded-full font-black text-3xl hover:bg-gray-100 transition-all transform hover:scale-110 inline-block shadow-2xl"
          >
            SECURE YOUR SPOT
          </a>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Email</h3>
              <a href="mailto:johnohoins@gmail.com" className="text-2xl text-blue-400 hover:text-blue-300">
                johnohoins@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Phone</h3>
              <a href="tel:970-708-0643" className="text-2xl text-blue-400 hover:text-blue-300">
                970-708-0643
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-xl">
              © {new Date().getFullYear()} Telluride Hockey Development. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
