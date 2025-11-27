import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">WanderLust</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Crafting authentic Sri Lankan travel experiences with a global
              touch since 2010. Let us plan your next adventure—wherever in the
              world it takes you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="#gallery"
                  className="hover:opacity-100 transition-opacity"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:opacity-100 transition-opacity"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:opacity-100 transition-opacity"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="hover:opacity-100 transition-opacity"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" />
                <span>+94 (11) 234-5678</span>
              </div>
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4" />
                <span>info@wanderlust.com</span>
              </div>
              <div className="flex items-start gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Travel Street, Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only ">Facebook</span>
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
          <p>
            &copy; {new Date().getFullYear()} WanderLust Travels. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
