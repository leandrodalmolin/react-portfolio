function App() {
  return (
    <>
      <header className="fixed w-full">
        <nav className="flex justify-between max-w-7xl mx-auto p-5">
          <div className="flex items-center justify-center w-10 h-10 bg-white text-zinc-700">
            ld.
          </div>

          <ul className="flex gap-6">
            <li>Selected Work</li>
            <li>About</li>
            <li>Personal Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <section className="relative w-full h-screen flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl text-white font-bold mb-8">Hi, I'm Leandro!</h1>
          <p className="text-3xl">A web developer with experience building websites for local businesses and golf clubs throughout the UK.</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 mx-auto text-center">
          <a href="#selected-work" className="inline-block w-5">
            <span className="relative block -rotate-90 mb-2 -left-[3px]">scroll</span>
            <span className="block w-[2px] h-5 bg-zinc-100 mx-auto"></span>
          </a>
        </div>
      </section>

      <section id="selected-work" className="bg-zinc-100">
        <div className="max-w-7xl mx-auto py-28 px-5">
          <div className="mb-14 text-center">
            <p className="mb-1 text-xs uppercase font-medium">© Artworking/Golfworking</p>
            <h2 className="text-zinc-800 text-5xl font-bold">Selected Work</h2>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="h-52 bg-zinc-400"></div>
            <div className="h-52 bg-zinc-400"></div>
            <div className="h-52 bg-zinc-400"></div>
            <div className="h-52 bg-zinc-400"></div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto py-28 px-5">
          <div className="mb-14 text-center">
            <p className="mb-1 text-xs uppercase font-medium">Who am I?</p>
            <h2 className="text-5xl text-white font-bold">About Me</h2>
          </div>
          <div className="text-center">
            <p className="text-xl mb-4 text-zinc-300">Originally from Brazil, I arrived in Bristol in 2017 I've been working as a Web Developer
            at Artworking/Golfworking since then.</p>
            <p className="text-lg">It's a small but busy company where I've been building websites for local businesses
            and golf clubs throughout the UK using an array of technologies like PHP (Wordpress), 
            MySQL, Javascript, jQuery, HTML and CSS (Sass).</p>
            <img
              className="inline-block max-w-[180px] rounded-xl mt-10"
              src="https://www.github.com/leandrodalmolin.png"
              alt="Leandro Dal Molin"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
