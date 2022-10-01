export function Projects() {
  return (
    <section>
      <div className="max-w-4xl mx-auto py-20 md:py-28 px-5">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase font-medium">Pinned from GitHub</p>
          <h2 className="text-4xl text-white font-serif font-bold sm:text-5xl">Side Projects</h2>
        </div>
        <div className="flex gap-10">
          <div className="flex-1 h-40 bg-zinc-100"></div>
          <div className="flex-1 h-40 bg-zinc-100"></div>
          <div className="flex-1 h-40 bg-zinc-100"></div>
          <div className="flex-1 h-40 bg-zinc-100"></div>
        </div>
      </div>
    </section>
  );
}