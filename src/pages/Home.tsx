import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Users, Award, Star } from 'lucide-react';
import homeImage from '../images/home.jpg'

const reviews = [
  {
    id: "9d6361b4-a605-4f5b-8204-49635ced511d",
    name: "Ishanth",
    service: "Back Pain Treatment",
    rating: 5,
    review: "After just 3 sessions, my chronic back pain has improved significantly. The staff is incredibly professional and caring.",
    image_url: "",
    is_approved: true,
    created_at: "2026-04-02T13:12:26.463209+00:00"
  },
    {
    id: "b7a1c2d3-e456-7890-abcd-123456789000",
    name: "Kathiravan",
    service: "Shoulder Pain Treatment",
    rating: 5,
    review: "After 6 sessions, my shoulder pain has reduced a lot. Excellent treatment and friendly staff.",
    image_url: "",
    is_approved: true,
    created_at: "2026-04-03T10:00:00.000000+00:00"
  },
    {
    id: "c3d4e5f6-1111-2222-3333-444455556666",
    name: "Abirami",
    service: "Neck Pain Treatment",
    rating: 5,
    review: "After 5 sessions, my pain has improved a lot. Very satisfied with the treatment.",
    image_url: "",
    is_approved: true,
    created_at: "2026-04-03T11:00:00.000000+00:00"
  }
];

export default function Home() {

  const services = [
    {
      title: 'Orthopedic physiotherapy',
      description: 'Specialized care for chronic and acute back pain with evidence-based techniques.',
      icon: '🦴',
    },
    {
      title: 'Sports Injury Rehab',
      description: 'Get back in the game with our comprehensive sports rehabilitation programs.',
      icon: '⚽',
    },
    {
      title: 'Post Surgery Rehab',
      description: 'Expert guidance through your post-operative recovery journey.',
      icon: '🏥',
    },
    {
      title: 'Neurological Physiotherapy',
      description: 'Specialized treatment for neurological conditions and mobility challenges.',
      icon: '🧠',
    },
    {
      title: 'Pediatric Physiotherapy',
      description: 'Gentle, effective care for children with developmental and physical challenges.',
      icon: '👶',
    },
    {
      title: 'Elderly Care',
      description: 'Compassionate therapy to maintain independence and quality of life.',
      icon: '👴',
    },
  ];

  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Patients' },
    { icon: Award, value: '3+', label: 'Years Experience' },
    { icon: Activity, value: '98%', label: 'Success Rate' },
    { icon: Heart, value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Trusted Healthcare Provider
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Sri  
                <span className="text-blue-600"> Angalaparameshwari</span>
                <span className="text-teal-600"> Physiotherapy Clinic & Rehabilitation</span>
              </h1>
              <h2 className='font-bold'>Healing With Grace & Expertise</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert physiotherapy care tailored to your unique needs. Our experienced team is dedicated to helping you achieve optimal health and mobility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={homeImage}
                  alt="Physiotherapy treatment"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive physiotherapy solutions for all your rehabilitation needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who have experienced our care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.review}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center px-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Read More Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book an appointment today and take the first step towards a pain-free life
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all"
          >
            Schedule Your Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
