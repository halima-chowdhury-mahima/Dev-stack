import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div
        className="
          mx-auto grid max-w-7xl
          grid-cols-1 items-center
          gap-10 px-5 py-14
          md:grid-cols-2 md:gap-12 md:py-20
          lg:py-24
        "
      >
        {/* =========================
            HERO CONTENT
        ========================== */}
        <div className="text-center md:text-left">

          {/* Heading */}
          <h1
            className="
              text-4xl font-extrabold
              leading-[1.1] tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Build Your Ideal
            <br />

            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto mt-5
              max-w-xl
              text-base leading-7
              text-slate-500
              md:mx-0
            "
          >
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-8 flex
              items-center justify-center
              gap-3
              md:justify-start
            "
          >
            {/* Explore Button */}
            <a
              href="#technologies"
              className="
                gradient-bg
                flex min-h-[52px] flex-1
                items-center justify-center
                rounded-lg
                px-4 py-3
                text-center text-sm
                font-semibold text-white
                transition
                hover:opacity-90
                sm:flex-none sm:px-6
              "
            >
              Explore Technologies
            </a>

            {/* Learn More Button */}
            <a
              href="#technologies"
              className="
                flex min-h-[52px] flex-1
                items-center justify-center
                rounded-lg
                border border-gray-300
                bg-white
                px-4 py-3
                text-center text-sm
                font-medium text-slate-700
                transition
                hover:border-pink-400
                hover:text-pink-500
                sm:flex-none sm:px-8
              "
            >
              Learn More
            </a>
          </div>
        </div>

        {/* =========================
            HERO IMAGE
        ========================== */}
        <div className="flex items-center justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Development Stack Illustration"
            className="
              w-full
              max-w-[340px]
              object-contain
              sm:max-w-[400px]
              md:max-w-[420px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;