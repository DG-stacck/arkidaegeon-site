import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-white border-r px-6 py-10 fixed top-0 left-0">
        <div className="text-3xl font-extrabold mb-8 tracking-tight leading-none">
          ARKI_DAEGUN
        </div>
        <nav className="flex flex-col space-y-4 text-base">
          <a href="#architecture" className="hover:underline">Architecture</a>
          <a href="#art" className="hover:underline">Art</a>
          <a href="#performance" className="hover:underline">Performance</a>
          <a href="#writings" className="hover:underline">Writings</a>
          <a href="#about" className="hover:underline">About</a>
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex-1 ml-64 px-12 py-16 bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 border-b">
          <h1 className="text-6xl font-bold tracking-tight mb-6">Daegeon Uh</h1>
          <p className="text-xl max-w-2xl">
            Architect. Artist. Dancer. Exploring the boundaries of space, motion, and image.
          </p>
        </section>

        {/* Sections */}
        <section id="architecture" className="py-20 border-b">
          <h2 className="text-3xl font-semibold mb-6">Architecture</h2>
          <p className="max-w-3xl mb-8">Selected projects exploring tectonics, urban form, and spatial storytelling.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-48 bg-gray-300 rounded" />
            <div className="h-48 bg-gray-300 rounded" />
            <div className="h-48 bg-gray-300 rounded" />
          </div>
        </section>

        <section id="art" className="py-20 border-b">
          <h2 className="text-3xl font-semibold mb-6">Art</h2>
          <p className="max-w-3xl mb-8">Paintings, drawings, and visual explorations that intersect memory and landscape.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-48 bg-gray-200 rounded" />
            <div className="h-48 bg-gray-200 rounded" />
            <div className="h-48 bg-gray-200 rounded" />
          </div>
        </section>

        <section id="performance" className="py-20 border-b">
          <h2 className="text-3xl font-semibold mb-6">Performance</h2>
          <p className="max-w-3xl mb-8">Movement-based works and dance explorations captured in video.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-48 bg-gray-300 rounded" />
            <div className="h-48 bg-gray-300 rounded" />
            <div className="h-48 bg-gray-300 rounded" />
          </div>
        </section>

        <section id="writings" className="py-20 border-b">
          <h2 className="text-3xl font-semibold mb-6">Writings</h2>
          <p className="max-w-3xl mb-8">Essays, reflections, and research spanning urban theory and cultural identity.</p>
          <ul className="space-y-4">
            <li className="underline">Translating Architectural Tectonics into Urban Design Discourse</li>
            <li className="underline">Icon and the Ordinary: Tracing Korea’s Shifting Urban Identity</li>
            <li className="underline">Hallyu and the City: K-pop Choreography and Public Space</li>
          </ul>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-3xl font-semibold mb-6">About / Contact</h2>
          <p className="max-w-3xl mb-2">Hi, I’m Daegeon Uh – an architect, visual artist, and dancer currently studying at Harvard GSD. I create across disciplines to investigate movement, structure, and meaning in our urban world.</p>
          <p className="max-w-3xl mb-2">Contact: <a href="mailto:daegeon@example.com" className="underline">daegeon@example.com</a></p>
          <p className="max-w-3xl">Instagram | LinkedIn | Horijon | YouTube</p>
        </section>
      </div>
    </main>
  );
}
