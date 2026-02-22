import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LogoWantASmoothie from "@/components/logo-want-a-smoothie";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <LogoWantASmoothie size="sm" />
            <span className="text-xl font-bold text-brand-gray">Want A Smoothie</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            <button
              onClick={() => scrollToSection("about")}
              className="text-brand-gray hover:text-brand-green transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
              role="menuitem"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-brand-gray hover:text-brand-green transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
              role="menuitem"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-brand-gray hover:text-brand-green transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
              role="menuitem"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("location")}
              className="brand-yellow text-brand-gray hover:bg-yellow-400 font-semibold transition-all duration-300"
              aria-label="Order Now - view location information"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-gray focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <div className="flex flex-col space-y-3" role="menu">
              <button
                onClick={() => scrollToSection("about")}
                className="text-brand-gray hover:text-brand-green transition-colors font-medium py-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                role="menuitem"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-brand-gray hover:text-brand-green transition-colors font-medium py-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                role="menuitem"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-brand-gray hover:text-brand-green transition-colors font-medium py-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                role="menuitem"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("location")}
                className="brand-yellow text-brand-gray hover:bg-yellow-400 font-semibold mt-4 transition-all duration-300"
                aria-label="Order Now - view location information"
              >
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
