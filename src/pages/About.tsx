import { Award, GraduationCap, Heart, Users } from "lucide-react";
import ourStoryImage from "../images/ourstory.jpg";
import doctorImage from "../images/download.png"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Your comfort and recovery are our top priorities. We listen, understand, and create personalized treatment plans.",
    },
    {
      icon: Award,
      title: "Excellence in Treatment",
      description:
        "We use evidence-based techniques and stay updated with the latest advancements in physiotherapy.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "We work closely with you and your healthcare team to ensure comprehensive care.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "Our team regularly updates their skills through professional development and training.",
    },
  ];

  const team = [
    {
      name: "Dr. Sakthi Kumaran ",
      role: "Lead Physiotherapist",
      image:doctorImage,
      credentials: "MPT Neurological Physiotherapy",
      experience: "3+ years",
      specialization: "Orthopedic & Sports Rehabilitation",
    },
      {
    name: "Dr. Kamal Dhasan",
    role: "Physiotherapist",
    image:doctorImage,
    credentials: "MPT Neurological Physiotherapy",
    experience: "2+ years",
    specialization: "Neurological Rehabilitation",
  }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 to-teal-600 text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About RevivePhysio
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Dedicated to restoring movement, relieving pain, and empowering you
            to live your best life through expert physiotherapy care.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to provide quality rehabilitation
                  services, SAPC Sri Angalaparameshwari Physiotherapy Clinic &
                  Rehabilitation Center has been dedicated to improving the
                  health and well-being of our community. What started as a
                  small initiative has grown into a trusted center for
                  comprehensive physiotherapy care.
                </p>
                <p>
                  Our team of skilled and experienced physiotherapists brings
                  together strong clinical knowledge and hands-on expertise
                  across various specializations. We follow a holistic approach
                  to treatment, combining proven techniques with modern methods
                  to ensure effective recovery and long-term results.
                </p>
                <p>
                  Every day, we witness the positive impact of our
                  treatments—patients regaining mobility, individuals overcoming
                  pain, and people returning to their normal lives with
                  confidence. This motivates us to continuously enhance our
                  services and provide the highest standard of care.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={ourStoryImage}
                alt="Our clinic"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl mb-4">
                  <value.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert physiotherapists dedicated to your recovery
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-medium">
                      {member.credentials}
                    </div>
                    <div className="text-xs text-gray-300">
                      {member.experience} Experience
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-medium mb-2">
                  {member.role}
                </div>
                <p className="text-gray-600">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            To provide compassionate, evidence-based physiotherapy care that
            empowers individuals to achieve optimal physical function, improve
            their quality of life, and maintain long-term wellness through
            personalized treatment and education.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Patients Treated</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
