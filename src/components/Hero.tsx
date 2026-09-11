import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 lg:py-24">

        {/* Left Side */}
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#technologies"
              className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-pink-400 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Development Stack Illustration"
            className="w-full max-w-[420px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;