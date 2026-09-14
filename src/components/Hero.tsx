import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-14 md:grid-cols-2 md:gap-12 md:py-20 lg:py-24">

        {/* Left Content */}
        <div className="text-center md:text-left">

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />

            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-8 grid w-full grid-cols-2 gap-3 md:flex md:w-auto md:justify-start">

            {/* Explore Technologies Button */}
            <a
              href="#technologies"
              className="gradient-bg flex min-h-12 items-center justify-center rounded-lg px-3 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90 md:px-6"
            >
              Explore Technologies
            </a>

            {/* Learn More Button */}
            <a
              href="#technologies"
              className="flex min-h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-pink-400 hover:text-pink-500 md:px-8"
            >
              Learn More
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Development Stack Illustration"
            className="w-full max-w-sm object-contain md:max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;