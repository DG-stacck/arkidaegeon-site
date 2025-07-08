import React from "react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 fixed top-0 left-0 h-screen bg-white border-r px-6 py-10 z-50">
        <div className="text-3xl font-bold tracking-tight leading-none mb-10">ARKI_DAEGUN</div>
        <nav className="flex flex-col space-y-4 text-base">
          <a href="#about" className="hover:underline">About</a>
          <a href="#architecture" className="hover:underline">Architecture</a>
          <a href="#art" className="hover:underline">Art</a>
          <a href="#performance" className="hover:underline">Performance</a>
          <a href="#writings" className="hover:underline">Writings</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 px-12 py-16 bg-gray-50">
        {/* About Section */}
        <section id="about" className="py-24 border-b">
          <h1 className="text-5xl font-bold mb-4">Daegeon Uh</h1>
          <p className="text-lg max-w-2xl text-gray-700">
            Architect, artist, and dancer studying at Harvard GSD. My work explores spatial narratives through tectonics, visuals, and movement.
          </p>
        </section>

        {/* Architecture */}
        <section id="architecture" className="py-24 border-b">
          <h2 className="text-3xl font-semibold mb-6">Architecture</h2>
          <p className="max-w-3xl mb-10 text-gray-700">Built and speculative works focused on urban design, tectonics, and transformation.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] bg-gray-300 rounded" />
            <div className="aspect-[4/3] bg-gray-300 rounded" />
            <div className="aspect-[4/3] bg-gray-300 rounded" />
          </div>
        </section>

        {/* Art */}
        <section id="art" className="py-24 border-b">
          <h2 className="text-3xl font-semibold mb-6">Art</h2>
          <p className="max-w-3xl mb-10 text-gray-700">Drawing, painting, and conceptual visuals that explore memory, place, and identity.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gray-200 rounded" />
            <div className="aspect-square bg-gray-200 rounded" />
            <div className="aspect-square bg-gray-200 rounded" />
            <div className="aspect-square bg-gray-200 rounded" />
          </div>
        </section>

        {/* Performance */}
        <section id="performance" className="py-24 border-b">
          <h2 className="text-3xl font-semibold mb-6">Performance</h2>
          <p className="max-w-3xl mb-10 text-gray-700">Explorations in movement and performance through K-pop, improvisation, and body-space interactions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gray-300 rounded" />
            <div className="aspect-video bg-gray-300 rounded" />
          </div>
        </section>

        {/* Writings */}
        <section id="writings" className="py-24 border-b">
          <h2 className="text-3xl font-semibold mb-6">Writings</h2>
          <ul className="space-y-4 text-gray-800">
            <li className="underline">Translating Architectural Tectonics into Urban Design Discourse</li>
            <li className="underline">Icon and the Ordinary: Tracing Korea’s Shifting Urban Identity</li>
            <li className="underline">Hallyu and the City: K-pop Choreography and Public Space</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <p className="mb-2">Email: <a href="mailto:daegeon@example.com" className="underline">daegeon@example.com</a></p>
          <p>Links: Instagram | LinkedIn | Horijon | YouTube</p>
        </section>
      </main>
    </div>
  );
}
