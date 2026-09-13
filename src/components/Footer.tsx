function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12">

        {/* Footer Main */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-linear-to-r from-purple-500 to-pink-500 text-[10px] font-bold text-white">
                DS
              </div>

              <h2 className="text-base font-bold text-gray-900">
                Dev <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="mt-4 max-w-xs text-xs leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5 text-xs font-medium text-gray-600">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-800">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">
              <a href="#" className="hover:text-pink-500">
                Home
              </a>

              <a href="#technologies" className="hover:text-pink-500">
                Technologies
              </a>

              <a href="#projects" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-800">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">
              <a href="#about" className="hover:text-pink-500">
                About
              </a>

              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>

              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-800">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-gray-500">
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-100 pt-6">

          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-pink-500">
                Privacy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;