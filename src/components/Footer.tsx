function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-bold text-white">
              DS
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              Dev <span className="text-pink-500">Stack</span>
            </h2>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 Dev Stack. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;