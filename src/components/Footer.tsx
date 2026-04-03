import { Link } from "react-router-dom";
import {
  Activity,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "../images/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="group-hover:scale-105 transition-transform">
                <img
                  src={Logo}
                  alt="SAPC Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white">
                  SAPC Physio
                </span>
                <p className="text-xs text-gray-400">Clinic & Rehab Center</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Restoring movement, relieving pain, and helping you live better
              through expert physiotherapy care.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Services",
                "Testimonials",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Back Pain Treatment
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Sports Injury Rehab
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Post Surgery Rehab
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Neurological Physiotherapy
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Pediatric Physiotherapy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Sri Angalaparameshwari Physiotherapy Clinic & Rehabilitation Housing Board, East Pondy Road, Villupuram 605-602</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>+91 9487200446</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>sapc.vpm.physio@gmail.com</span>
              </li>
            </ul>
            <div className="flex items-center space-x-3 mt-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SAPC Physio Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
