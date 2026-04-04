import { Link } from "react-router-dom";
import { ArrowRight, Activity, Heart, Users, Award, Star } from "lucide-react";
import homeImage from "../images/home.jpg";

const reviews = [
  {
    id: "1",
    name: "Ishanth",
    service: "Back Pain Treatment",
    rating: 5,
    review:
      "After just 3 sessions, my chronic back pain has improved significantly.",
  },
  {
    id: "2",
    name: "Kathiravan",
    service: "Shoulder Pain Treatment",
    rating: 5,
    review:
      "After 6 sessions, my shoulder pain has reduced a lot. Excellent treatment.",
  },
  {
    id: "3",
    name: "Abirami",
    service: "Neck Pain Treatment",
    rating: 5,
    review: "After 5 sessions, my pain has improved a lot. Very satisfied.",
  },
];

export default function Home() {
  const services = [
    {
      title: "Orthopedic Physiotherapy",
      description: "Effective treatment for joint, muscle & bone pain.",
      icon: "🦴",
    },
    {
      title: "Sports Injury Rehab",
      description: "Recover faster and safely return to sports.",
      icon: "⚽",
    },
    {
      title: "Post Surgery Rehab",
      description: "Speed up healing after surgery.",
      icon: "🏥",
    },
    {
      title: "Neuro Physiotherapy",
      description: "Care for stroke & neurological conditions.",
      icon: "🧠",
    },
    {
      title: "Pediatric Therapy",
      description: "Special care for children.",
      icon: "👶",
    },
    {
      title: "Elderly Care",
      description: "Improve mobility and independence.",
      icon: "👴",
    },
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Patients" },
    { icon: Award, value: "3+", label: "Experience" },
    { icon: Activity, value: "98%", label: "Success" },
    { icon: Heart, value: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 pt-28 pb-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Sri <span className="text-blue-600">Angalaparameshwari</span>
              <span className="text-teal-600 block">Physiotherapy Clinic</span>
            </h1>

            <p className="text-gray-600 mt-4 text-base sm:text-lg">
              Expert physiotherapy care to help you live pain-free and active.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                to="/appointment"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center"
              >
                Book Appointment
              </Link>

              <Link
                to="/services"
                className="border px-6 py-3 rounded-lg text-center"
              >
                Our Services
              </Link>
            </div>
          </div>

          <img
            src={homeImage}
            alt="clinic"
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-xl"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <stat.icon className="mx-auto text-blue-600 mb-2" />
              <h3 className="text-xl font-bold">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-12 sm:py-16 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Patient Reviews
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {reviews.map((r) => (
            <div key={r.id} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex mb-2">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-3">"{r.review}"</p>
              <h4 className="font-semibold">{r.name}</h4>
              <p className="text-xs text-gray-500">{r.service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Start Your Pain-Free Journey Today
          </h2>
          <p className="text-blue-100 mb-6 text-sm sm:text-base">
            Book your appointment now and get expert physiotherapy care tailored
            for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Book Appointment
            </Link>

            <a
              href="tel:+919487200446"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE FIXED BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-3 shadow md:hidden">
        <Link
          to="/appointment"
          className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
