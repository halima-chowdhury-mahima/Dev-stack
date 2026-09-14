import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-gray-200 bg-white text-slate-900"
    >
      <div className="mx-auto max-w-7xl px-5 py-14">

        {/* Footer Main Content */}
        <div
          className="
            grid gap-10
            text-center
            md:grid-cols-2 md:text-left
            lg:grid-cols-4
          "
        >
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="inline-block">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex justify-center gap-4 text-sm md:justify-start">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a
                href="#technologies"
                className="transition hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="transition hover:text-pink-500"
              >
                Projects
              </a>

              <a
                href="#home"
                className="transition hover:text-pink-500"
              >
                Features
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a
                href="#about"
                className="transition hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#contact"
                className="transition hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#home"
                className="transition hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <a
                href="#privacy"
                className="transition hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="transition hover:text-pink-500"
              >
                Terms of Service
              </a>

              <a
                href="#cookies"
                className="transition hover:text-pink-500"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className="
            mt-12 flex
            flex-col items-center
            gap-4
            border-t border-gray-200
            pt-6
            text-center text-sm
            text-slate-500
            sm:flex-row
            sm:justify-between
            sm:text-left
          "
        >
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex justify-center gap-5">
            <a
              href="#privacy"
              className="transition hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="transition hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;