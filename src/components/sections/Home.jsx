export function Home() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-5 text-center">
        <h1 className="text-3xl text-white font-bold mb-5 font-serif sm:text-4xl sm:mb-8">Hi, I'm Leandro!</h1>
        <p className="text-xl sm:text-3xl">A web developer focused on creating interactive digital experiences on the web.</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mx-auto text-center">
        <a href="#work" className="inline-block w-5">
          <span className="relative block -rotate-90 mb-2 -left-[3px]">scroll</span>
          <span className="block w-[2px] h-5 bg-zinc-100 mx-auto"></span>
        </a>
      </div>
    </section>
  );
}