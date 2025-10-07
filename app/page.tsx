import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-600">
          Telluride Winter Hockey Skills Camp
        </h1>
        <p className="text-lg mb-2">Dates: December 20–21 & December 27–28</p>
        <p className="text-lg mb-2">Location: Hanley Rink, Telluride, CO</p>
        <p className="text-lg mb-6">
          Price: $190 per player (includes two 75-minute sessions)
        </p>
        <p className="text-lg mb-6">Ages: 6U–19U</p>
        <a
          href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          Register & Pay Online
        </a>
      </div>
      
      <div className="max-w-3xl mx-auto py-16 px-6 text-center">
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
      </div>

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Your Coaches</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">Johno Hoins</h3>
              <p className="text-gray-700 text-left text-sm max-w-sm mx-auto">
                Center born in Telluride, Johno grew up on the ice before moving
                east to play prep school hockey and later juniors in Canada and
                Pennsylvania. He now plays NCAA hockey at Manhattanville
                University and serves as an assistant coach for the U16 team in
                Mamaroneck, NY.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Justin Fernet</h3>
              <p className="text-gray-700 text-left text-sm max-w-sm mx-auto">
                Defenseman from Sherbrooke, QC. Born and raised in Sherbrooke,
                Quebec, Justin played throughout Quebec until 2020 before moving
                to Connecticut to play prep school hockey. Now at Manhattanville
                University.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg text-gray-700 mb-2">
          📧 Email: johnohoins@gmail.com
        </p>
        <p className="text-lg text-gray-700 mb-2">
          📱 Call/Text: 970-708-0643
        </p>
      </div>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Telluride Hockey Development. All rights reserved.
      </footer>
    </main>
  );
}
