export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">🏒 Telluride Hockey</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#schedule" className="text-gray-700 hover:text-blue-600 transition-colors">Schedule</a>
              <a href="#coaches" className="text-gray-700 hover:text-blue-600 transition-colors">Coaches</a>
              <a href="#register" className="text-gray-700 hover:text-blue-600 transition-colors">Register</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <a
              href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
              target="_blank"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Mountain Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551524164-6cf2ac531c64?auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Telluride Winter Hockey
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-200">
            Skills Camp 2024
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <p className="text-2xl md:text-3xl font-semibold mb-4">December 20–21 & December 27–28</p>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">Hanley Rink, Telluride, CO</p>
            <p className="text-2xl font-bold mb-8 text-yellow-300">$190 per player • Ages 6U–19U</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl"
              >
                Register & Pay Online
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-4 rounded-xl font-bold text-xl transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About the Camp</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A fun and productive few days on the ice focused on improving all areas of individual skill. 
              Players will work on skating, shooting, passing, stickhandling, and hockey IQ through 
              high-tempo drills with current college players and experienced youth coaches.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⛸️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Skill Development</h3>
              <p className="text-gray-600">High-tempo drills focused on skating, shooting, passing, and stickhandling</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Hockey IQ</h3>
              <p className="text-gray-600">Decision-making and game sense development through situational drills</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Small Groups</h3>
              <p className="text-gray-600">More individual attention and feedback for maximum improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Camp Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-6">December 20–21</h3>
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">6U & 8U</h4>
                  <p className="text-blue-100">Saturday 8:45am • Sunday 9:00am</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">10U</h4>
                  <p className="text-blue-100">Saturday 12:00pm • Sunday 10:30am</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">19U</h4>
                  <p className="text-blue-100">Saturday 1:30pm • Sunday 12:00pm</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-6">December 27–28</h3>
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">12U</h4>
                  <p className="text-green-100">Saturday 8:45am • Sunday 9:00am</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">14U</h4>
                  <p className="text-green-100">Saturday 12:00pm • Sunday 10:30am</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">19U</h4>
                  <p className="text-green-100">Saturday 1:30pm • Sunday 12:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Meet Your Coaches</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=300&q=80"
                  alt="Johno Hoins - NCAA Hockey Player and Coach"
                  className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-blue-900">Johno Hoins</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Center born in Telluride, Johno grew up on the ice before moving east to play prep school hockey 
                    and later juniors in Canada and Pennsylvania. He now plays NCAA hockey at Manhattanville University 
                    and serves as an assistant coach for the U16 team in Mamaroneck, NY. Coaches and trains with players 
                    at Paul Vincent Hockey in MA—a camp known for developing NHL and college talent.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="https://images.unsplash.com/photo-1558898479-33c005b4f27b?auto=format&fit=crop&w=300&q=80"
                  alt="Justin Fernet - NCAA Hockey Player and Coach"
                  className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-blue-900">Justin Fernet</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
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

      {/* Registration CTA Section */}
      <section id="register" className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Register?</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            $190 per player • Two 75-minute sessions • Limited spots available
          </p>
          <a
            href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
            target="_blank"
            className="bg-white text-blue-600 px-12 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl inline-block"
          >
            Register & Pay Online
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Email</h3>
              <a 
                href="mailto:johnohoins@gmail.com" 
                className="text-xl text-blue-300 hover:text-blue-200 transition-colors"
              >
                johnohoins@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Phone</h3>
              <a 
                href="tel:970-708-0643" 
                className="text-xl text-blue-300 hover:text-blue-200 transition-colors"
              >
                970-708-0643
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-lg">
              © {new Date().getFullYear()} Telluride Hockey Development. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}