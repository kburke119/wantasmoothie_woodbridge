import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="location" className="py-12 bg-white" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="location-heading" className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">
            Visit Our Location
          </h2>
          <div className="w-24 h-1 brand-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find us inside Knot Just Bagels — making it easy to grab your healthy fix any day of the week!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="text-center">
              <div className="w-16 h-16 brand-yellow rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <MapPin className="text-brand-gray" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-gray mb-3">Address</h3>
              <address className="not-italic">
                <p className="text-gray-600 font-medium">93 Main Street</p>
                <p className="text-gray-600 font-medium">Woodbridge, NJ 07095</p>
              </address>
              <p className="text-sm text-brand-green italic mt-2">Inside Knot Just Bagels</p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="w-16 h-16 brand-yellow rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Clock className="text-brand-gray" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-gray mb-3">Hours</h3>
              <p className="text-gray-600 font-medium">Everyday</p>
              <p className="text-gray-600 font-bold text-lg">6:00 AM – 3:00 PM</p>
            </div>

            {/* Special Orders */}
            <div className="text-center">
              <div className="w-16 h-16 brand-yellow rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Phone className="text-brand-gray" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-gray mb-3">Special Orders</h3>
              <p className="text-gray-600">Contact us to schedule</p>
              <p className="text-gray-600">cleanses &amp; weekly</p>
              <p className="text-gray-600">pick-up packages</p>
            </div>
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-brand-gray mb-4">Ready to Order?</h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Visit us inside Knot Just Bagels for fresh smoothies, cold-pressed juices, and healthy bowls.
              We're excited to serve you!
            </p>
            {/* TODO: Replace with actual Square online ordering link when available */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-cta px-8 py-3 text-lg rounded-lg"
              aria-label="Contact us to place an order"
            >
              Contact Us to Order
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
