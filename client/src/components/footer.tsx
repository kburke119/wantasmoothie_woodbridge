const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="brand-gray text-white" role="contentinfo">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1 — Brand + NAP */}
          <div>
            <img
              src="/images/want-a-smoothie-logo.avif"
              alt="Want A Smoothie"
              width={56}
              height={56}
              className="h-14 w-auto mb-4"
            />
            <h2 className="text-xl font-bold text-white mb-2">Want A Smoothie</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Fresh, 100% natural smoothies and healthy food. No added concentrates
              or syrups — every product is real food.
            </p>
            <address className="not-italic text-sm text-gray-400 space-y-1">
              <p>93 Main Street</p>
              <p>Woodbridge, NJ 07095</p>
              <p>Inside Knot Just Bagels</p>
              <a
                href="tel:+17327501999"
                className="block mt-2 text-brand-yellow hover:text-yellow-300 transition-colors font-medium"
                aria-label="Call Want A Smoothie at 732-750-1999"
              >
                (732) 750-1999
              </a>
            </address>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-brand-yellow transition-colors text-left w-full"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("location")}
                    className="hover:text-brand-yellow transition-colors text-left w-full"
                  >
                    Location &amp; Hours
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-brand-yellow transition-colors text-left w-full"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3 — Hours */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Hours
            </h3>
            <dl className="text-sm text-gray-400 space-y-1">
              <div className="flex justify-between gap-4">
                <dt>Monday – Sunday</dt>
                <dd className="text-white font-medium whitespace-nowrap">6:00 AM – 3:00 PM</dd>
              </div>
            </dl>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Special orders available for cleanses &amp; weekly pick-up packages.{" "}
              <button
                onClick={() => scrollToSection("contact")}
                className="text-brand-yellow hover:text-yellow-300 transition-colors underline underline-offset-2"
              >
                Contact us
              </button>{" "}
              to schedule.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Want A Smoothie. All rights reserved.
          </p>
          <p>
            Located inside{" "}
            <span className="text-gray-400">Knot Just Bagels</span>
            {" "}· Woodbridge, NJ
          </p>
        </div>
      </div>
    </footer>
  );
}
