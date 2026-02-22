export default function Footer() {
  return (
    <footer className="brand-gray text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 bg-white border border-gray-200 rounded-lg py-8 px-4 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Explore Our Brands</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Current site - not a link */}
            <div>
              <div className="block w-full opacity-60">
                <div className="flex justify-center items-center mb-4" style={{ height: "80px" }}>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <img
                      src="/images/want-a-smoothie-logo.avif"
                      alt="Want A Smoothie Logo"
                      width={64}
                      height={64}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-lg text-brand-yellow mb-2">Want A Smoothie</h4>
                <p className="text-gray-600 text-sm">Fresh, convenient, real food &amp; refreshments</p>
                <p className="text-gray-500 text-xs mt-2 italic">Current Site</p>
              </div>
            </div>

            {/* Bounce Back Fitness */}
            <div>
              <a
                href="https://www.bouncebackfit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full hover:shadow-md transition-all duration-200"
                aria-label="Visit Bounce Back Fitness website (opens in new tab)"
              >
                <div className="flex justify-center items-center mb-4" style={{ height: "80px" }}>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex items-center justify-center">
                    <img
                      src="/images/bounce-back-fitness-logo.png"
                      alt="Bounce Back Fitness Logo"
                      width={64}
                      height={64}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Bounce Back Fitness</h4>
                <p className="text-gray-600 text-sm">Corrective &amp; Functional Training</p>
              </a>
            </div>

            {/* Float Into Wellness */}
            <div>
              <a
                href="https://www.floatintowellness.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full hover:shadow-md transition-all duration-200"
                aria-label="Visit Float Into Wellness website (opens in new tab)"
              >
                <div className="flex justify-center items-center mb-4" style={{ height: "80px" }}>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <img
                      src="/images/float-into-wellness-logo.jpg"
                      alt="Float Into Wellness Logo"
                      width={64}
                      height={64}
                      className="h-16 w-16 object-cover rounded-full"
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Float Into Wellness</h4>
                <p className="text-gray-600 text-sm">Recovery for body and mind</p>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Want A Smoothie. All rights reserved. | Located inside Knot Just Bagels
          </p>
        </div>
      </div>
    </footer>
  );
}
