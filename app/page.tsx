export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <section className="text-center py-20 px-6 bg-[url(\"https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80\")] bg-cover bg-center text-white">
        <div className="bg-black/60 p-10 rounded-xl inline-block">
          <h1 className="text-5xl font-extrabold mb-4">
            Telluride Winter Hockey Skills Camp
          </h1>
          <p className="text-lg mb-2">Dates: December 20–21 & December 27–28</p>
          <p className="text-lg mb-2">Location: Hanley Rink, Telluride, CO</p>
          <p className="text-lg mb-6">
            Price: $190 per player (includes two 75-minute sessions) <br />
            Ages: 6U–19U
          </p>
          <a
            href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Register & Pay Online
          </a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About the Camp</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          A fun and productive few days on the ice focused on improving all
          areas of individual skill. Players will work on skating, shooting,
          passing, stickhandling, and hockey IQ through high-tempo drills.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Each player gets two 75-minute sessions led by current college players
          and experienced youth coaches.
        </p>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Your Coaches</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <img
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80"
                alt="Johno Hoins"
                className="rounded-xl shadow-md mb-4 mx-auto h-60 w-60 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Johno Hoins</h3>
              <p className="text-gray-700 text-left text-sm max-w-sm mx-auto">
                Center born in Telluride, Johno grew up on the ice before moving
                east to play prep school hockey and later juniors in Canada and
                Pennsylvania. He now plays NCAA hockey at Manhattanville
                University and serves as an assistant coach for the U16 team in
                Mamaroneck, NY. Coaches and trains with players at Paul Vincent
                Hockey in MA—a camp known for developing NHL and college talent.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1558898479-33c005b4f27b?auto=format&fit=crop&w=400&q=80"
                alt="Justin Fernet"
                className="rounded-xl shadow-md mb-4 mx-auto h-60 w-60 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Justin Fernet</h3>
              <p className="text-gray-700 text-left text-sm max-w-sm mx-auto">
                Defenseman from Sherbrooke, QC. Born and raised in Sherbrooke,
                Quebec, Justin played throughout Quebec until 2020 before moving
                to Connecticut to play prep school hockey. Now at Manhattanville
                University, he has spent the past two and a half years coaching
                with Académie CCM in Sherbrooke and Euro Hockey / Eric Nates
                Hockey in the New York area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Schedule</h2>
        <div className="text-left text-gray-700 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">December 20–21</h3>
            <ul className="space-y-1">
              <li>6U & 8U → Sat 8:45 am • Sun 9:00 am</li>
              <li>10U → Sat 12:00 pm • Sun 10:30 am</li>
              <li>19U → Sat 1:30 pm • Sun 12:00 pm</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">December 27–28</h3>
            <ul className="space-y-1">
              <li>12U → Sat 8:45 am • Sun 9:00 am</li>
              <li>14U → Sat 12:00 pm • Sun 10:30 am</li>
              <li>19U → Sat 1:30 pm • Sun 12:00 pm</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Registration</h2>
        <p className="text-lg text-gray-700 mb-4">
          Price: $190 per player <br />
          Includes: Two 75-minute sessions <br />
          Limited Spots Available
        </p>
        <a
          href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          Register & Pay Online
        </a>
      </section>

      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg text-gray-700 mb-2">
          📧 Email:{" "}
          <a
            href="mailto:johnohoins@gmail.com"
            className="text-blue-600 hover:underline"
          >
            johnohoins@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          📱 Call/Text: 970-708-0643
        </p>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Telluride Hockey Development. All rights reserved.
      </footer>
    </main>
  );
}
