function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">

        <div className="max-w-2xl text-center md:text-left">

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">

            <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 bg-white px-7 py-3 text-sm font-medium text-gray-600">
              Learn More
            </button>

          </div>
        </div>

        <div className="flex justify-center md:w-1/2">
          <img
            src="/src/assets/banner-stack.png"
            alt="Development stack illustration"
            className="w-64 sm:w-72 md:w-80"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;