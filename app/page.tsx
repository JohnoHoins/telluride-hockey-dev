export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Telluride Winter Hockey Skills Camp
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            December 20–21 & December 27–28, 2024
          </p>
          <p className="text-lg mb-8 opacity-80">
            Hanley Rink, Telluride, CO • Ages 6U–19U
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
              target="_blank"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Register Now - $190
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About the Camp</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                A fun and productive few days on the ice focused on improving all areas of individual skill. 
                Players will work on skating, shooting, passing, stickhandling, and hockey IQ through 
                high-tempo drills.
              </p>
              <p className="text-lg text-gray-700">
                Each player gets two 75-minute sessions led by current college players and experienced youth coaches.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-3">⛸️</div>
                <h3 className="font-bold mb-2">Skill Development</h3>
                <p className="text-sm text-gray-600">Edgework, puck control, shooting</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="font-bold mb-2">Hockey IQ</h3>
                <p className="text-sm text-gray-600">Decision-making & game sense</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="font-bold mb-2">Small Groups</h3>
                <p className="text-sm text-gray-600">More reps, more feedback</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-bold mb-2">College Coaches</h3>
                <p className="text-sm text-gray-600">NCAA-level instruction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">December 20–21</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="font-semibold">6U & 8U</span>
                  <span className="text-blue-700">Sat 8:45am • Sun 9:00am</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="font-semibold">10U</span>
                  <span className="text-blue-700">Sat 12:00pm • Sun 10:30am</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold">19U</span>
                  <span className="text-blue-700">Sat 1:30pm • Sun 12:00pm</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-green-900">December 27–28</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="font-semibold">12U</span>
                  <span className="text-green-700">Sat 8:45am • Sun 9:00am</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="font-semibold">14U</span>
                  <span className="text-green-700">Sat 12:00pm • Sun 10:30am</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold">19U</span>
                  <span className="text-green-700">Sat 1:30pm • Sun 12:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet Your Coaches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=300&q=80"
                  alt="Johno Hoins"
                  className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Johno Hoins</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Center born in Telluride, Johno grew up on the ice before moving east to play prep school hockey 
                    and later juniors in Canada and Pennsylvania. He now plays NCAA hockey at Manhattanville University 
                    and serves as an assistant coach for the U16 team in Mamaroneck, NY. Coaches and trains with players 
                    at Paul Vincent Hockey in MA—a camp known for developing NHL and college talent.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="https://images.unsplash.com/photo-1558898479-33c005b4f27b?auto=format&fit=crop&w=300&q=80"
                  alt="Justin Fernet"
                  className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Justin Fernet</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Defenseman from Sherbrooke, QC. Born and raised in Sherbrooke, Quebec, Justin played throughout 
                    Quebec until 2020 before moving to Connecticut to play prep school hockey. Now at Manhattanville 
                    University, he has spent the past two and a half years coaching with Académie CCM in Sherbrooke 
                    and Euro Hockey / Eric Nates Hockey in the New York area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Register?</h2>
          <p className="text-xl mb-8 opacity-90">
            $190 per player • Two 75-minute sessions • Limited spots available
          </p>
          <a
            href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
            target="_blank"
            className="bg-white text-blue-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors inline-block"
          >
            Register & Pay Online
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <a 
                href="mailto:johnohoins@gmail.com" 
                className="text-blue-400 hover:text-blue-300 text-lg"
              >
                johnohoins@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <a 
                href="tel:970-708-0643" 
                className="text-blue-400 hover:text-blue-300 text-lg"
              >
                970-708-0643
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Telluride Hockey Development. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
