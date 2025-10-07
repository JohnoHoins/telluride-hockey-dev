export default function Home() {
  const stripeLink = "https://buy.stripe.com/YOUR_STRIPE_LINK";

  return (
    <main>
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-lg">
            Telluride Hockey Dev
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#schedule" className="hover:text-blue-600">Schedule</a>
            <a href="#coaches" className="hover:text-blue-600">Coaches</a>
            <a href="#register" className="hover:text-blue-600">Register</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a
            href={stripeLink}
            target="_blank"
            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white text-sm font-semibold hover:bg-blue-700 transition"
          >
            Register
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(\"https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=2000&q=80\")",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Telluride Winter Hockey Skills Camp
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            December 20–21 & December 27–28 • Hanley Rink, Telluride, CO
          </p>
          <p className="text-lg md:text-xl opacity-90 mt-1">
            $190 per player (two 75-minute sessions) • Ages 6U–19U
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={stripeLink}
              target="_blank"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition"
            >
              Register & Pay Online
            </a>
            <a
              href="#about"
              className="rounded-xl bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">About the Camp</h2>
        <p className="text-lg leading-relaxed text-gray-700 text-center">
          A fun and productive few days on the ice focused on improving all areas of individual skill.
          Players will work on skating, shooting, passing, stickhandling, and hockey IQ through
          high-tempo drills.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 text-center mt-4">
          Each player gets two 75-minute sessions led by current college players and experienced youth coaches.
        </p>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white p-5 shadow-sm border text-center">
            <div className="text-3xl">⛸️</div>
            <div className="font-semibold mt-2">High-Tempo Skill Work</div>
            <p className="text-sm text-gray-600 mt-1">Edgework, puck control, shooting, passing.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm border text-center">
            <div className="text-3xl">🧠</div>
            <div className="font-semibold mt-2">Hockey IQ</div>
            <p className="text-sm text-gray-600 mt-1">Small-area games & decision-making drills.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm border text-center">
            <div className="text-3xl">👥</div>
            <div className="font-semibold mt-2">Small Groups</div>
            <p className="text-sm text-gray-600 mt-1">More reps, more feedback, more fun.</p>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="bg-white border-y">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Schedule</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">December 20–21</h3>
              <ul className="space-y-2 text-gray-700">
                <li>6U & 8U → Sat 8:45 am • Sun 9:00 am</li>
                <li>10U → Sat 12:00 pm • Sun 10:30 am</li>
                <li>19U → Sat 1:30 pm • Sun 12:00 pm</li>
              </ul>
            </div>

            <div className="rounded-2xl border shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">December 27–28</h3>
              <ul className="space-y-2 text-gray-700">
                <li>12U → Sat 8:45 am • Sun 9:00 am</li>
                <li>14U → Sat 12:00 pm • Sun 10:30 am</li>
                <li>19U → Sat 1:30 pm • Sun 12:00 pm</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={stripeLink}
              target="_blank"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              Reserve a Spot
            </a>
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section id="coaches" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Meet Your Coaches</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white border shadow-sm p-6">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <img
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80"
                alt="Johno Hoins"
                className="h-28 w-28 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">Johno Hoins</h3>
                <p className="text-gray-700 text-sm mt-2">
                  Center born in Telluride, Johno grew up on the ice before moving east to play prep
                  school hockey and later juniors in Canada and Pennsylvania. He now plays NCAA hockey
                  at Manhattanville University and serves as an assistant coach for the U16 team in
                  Mamaroneck, NY. Coaches and trains with players at Paul Vincent Hockey in MA—a camp
                  known for developing NHL and college talent.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white border shadow-sm p-6">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <img
                src="https://images.unsplash.com/photo-1558898479-33c005b4f27b?auto=format&fit=crop&w=400&q=80"
                alt="Justin Fernet"
                className="h-28 w-28 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">Justin Fernet</h3>
                <p className="text-gray-700 text-sm mt-2">
                  Defenseman from Sherbrooke, QC. Born and raised in Sherbrooke, Quebec, Justin played
                  throughout Quebec until 2020 before moving to Connecticut to play prep school hockey.
                  Now at Manhattanville University, he has spent the past two and a half years coaching
                  with Académie CCM in Sherbrooke and Euro Hockey / Eric Nates Hockey in the New York area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="register" className="bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Registration</h2>
          <p className="text-lg text-gray-700 mb-4">
            Price: $190 per player • Includes two 75-minute sessions • Limited spots available
          </p>
          <a
            href={stripeLink}
            target="_blank"
            className="rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Register & Pay Online
          </a>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-700 mb-2">
            📧 <a className="text-blue-600 hover:underline" href="mailto:johnohoins@gmail.com">johnohoins@gmail.com</a>
          </p>
          <p className="text-lg text-gray-700">📱 Call/Text: 970-708-0643</p>
          <p className="text-sm text-gray-500 mt-6">
            Refunds: Full refund up to 14 days before your session; within 14 days you may transfer your spot.
          </p>
        </div>
        <footer className="text-center py-6 text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} Telluride Hockey Development. All rights reserved.
        </footer>
      </section>

      {/* MOBILE STICKY CTA */}
      <a
        href={stripeLink}
        target="_blank"
        className="fixed bottom-4 right-4 sm:hidden shadow-lg rounded-full bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
      >
        Register
      </a>
    </main>
  );
}
