function Hero() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">

        {/* Hero Content */}
        <div className="max-w-xl text-center md:text-left">

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-orange-500 via-pink-600 to-purple-400 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">

            <button className="rounded-md bg-linear-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 px-7 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
              Learn More
            </button>

          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="/banner-stack.png"
            alt="Development stack illustration"
            className="w-64 sm:w-72 md:w-80"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;