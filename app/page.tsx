export default function Home() {
  return (
    <div className="min-h-screen bg-red-500">
      {/* UNIQUE IDENTIFIER: NEW DESIGN 2024 */}
      <section className="bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 text-white py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-8xl md:text-9xl font-black mb-8 tracking-tight text-yellow-300">
            🏒 TELLURIDE HOCKEY 🏒
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            WINTER SKILLS CAMP 2024
          </h2>
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
            <p className="text-4xl font-bold mb-6 text-yellow-300">$190 PER PLAYER</p>
            <p className="text-2xl mb-8">December 20-21 & 27-28 • Hanley Rink, Telluride</p>
            <p className="text-xl mb-8">Two 75-minute sessions • Ages 6U-19U</p>
            <a
              href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
              target="_blank"
              className="bg-yellow-400 text-black px-16 py-6 rounded-full font-black text-3xl hover:bg-yellow-300 transition-all transform hover:scale-110 inline-block shadow-2xl"
            >
              🚀 REGISTER NOW 🚀
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-6xl font-black mb-12 text-white">ABOUT THE CAMP</h2>
          <p className="text-2xl text-white mb-8">
            High-tempo skill development with college-level coaches
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl">
              <div className="text-8xl mb-4">⛸️</div>
              <h3 className="text-3xl font-bold mb-4">SKILLS</h3>
              <p className="text-lg">Skating, shooting, passing, stickhandling</p>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <div className="text-8xl mb-4">🧠</div>
              <h3 className="text-3xl font-bold mb-4">HOCKEY IQ</h3>
              <p className="text-lg">Decision-making and game sense</p>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <div className="text-8xl mb-4">👥</div>
              <h3 className="text-3xl font-bold mb-4">SMALL GROUPS</h3>
              <p className="text-lg">More individual attention</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-6xl font-black mb-12 text-white">COACHES</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=300&q=80"
                alt="Johno Hoins"
                className="w-40 h-40 rounded-full mx-auto mb-6"
              />
              <h3 className="text-3xl font-bold mb-4 text-blue-600">JOHNO HOINS</h3>
              <p className="text-lg">NCAA player at Manhattanville University. Assistant coach for U16 team.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1558898479-33c005b4f27b?auto=format&fit=crop&w=300&q=80"
                alt="Justin Fernet"
                className="w-40 h-40 rounded-full mx-auto mb-6"
              />
              <h3 className="text-3xl font-bold mb-4 text-blue-600">JUSTIN FERNET</h3>
              <p className="text-lg">NCAA player at Manhattanville University. Experienced youth coach.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-6xl font-black mb-8">CONTACT</h2>
          <p className="text-3xl mb-4">📧 johnohoins@gmail.com</p>
          <p className="text-3xl mb-8">📱 970-708-0643</p>
          <p className="text-xl">© 2024 Telluride Hockey Development</p>
        </div>
      </section>
    </div>
  );
}
