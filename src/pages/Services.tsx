import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Orthopedic Physiotherapy',
      icon: '🦴',
      description: 'Comprehensive treatment for chronic and acute back pain using evidence-based techniques.',
      benefits: [
        'Reduce chronic back pain',
        'Improve posture and alignment',
        'Strengthen core muscles',
        'Prevent future injuries',
        'Non-invasive treatment options',
      ],
      conditions: ['Lower back pain', 'Sciatica', 'Herniated discs', 'Muscle strains', 'Postural issues'],
    },
    {
      title: 'Sports Injury Rehabilitation',
      icon: '⚽',
      description: 'Get back to peak performance with our specialized sports injury rehabilitation programs.',
      benefits: [
        'Faster recovery times',
        'Reduce re-injury risk',
        'Improve athletic performance',
        'Sport-specific training',
        'Gradual return-to-play protocols',
      ],
      conditions: ['ACL/MCL injuries', 'Tennis elbow', 'Ankle sprains', 'Shoulder injuries', 'Running injuries'],
    },
    {
      title: 'Post-Surgery Rehabilitation',
      icon: '🏥',
      description: 'Expert guidance through your post-operative recovery journey with personalized care plans.',
      benefits: [
        'Optimize surgical outcomes',
        'Regain strength and mobility',
        'Minimize scar tissue',
        'Pain management',
        'Personalized recovery timeline',
      ],
      conditions: ['Joint replacement', 'Arthroscopy', 'Spinal surgery', 'Fracture repair', 'Tendon repair'],
    },
    {
      title: 'Neurological Physiotherapy',
      icon: '🧠',
      description: 'Specialized treatment for neurological conditions to improve mobility and function.',
      benefits: [
        'Improve balance and coordination',
        'Enhance motor control',
        'Increase independence',
        'Prevent complications',
        'Adaptive equipment training',
      ],
      conditions: ['Stroke recovery', "Parkinson's disease", 'Multiple sclerosis', 'Spinal cord injury', 'Brain injury'],
    },
    {
      title: 'Pediatric Physiotherapy',
      icon: '👶',
      description: 'Gentle, effective care for children with developmental and physical challenges.',
      benefits: [
        'Improve motor development',
        'Enhance coordination',
        'Build strength and endurance',
        'Family-centered approach',
        'Fun, engaging sessions',
      ],
      conditions: ['Cerebral palsy', 'Developmental delays', 'Torticollis', 'Gait abnormalities', 'Sports injuries'],
    },
    {
      title: 'Elderly Care & Fall Prevention',
      icon: '👴',
      description: 'Compassionate therapy to maintain independence and quality of life for seniors.',
      benefits: [
        'Prevent falls and injuries',
        'Maintain independence',
        'Improve balance and stability',
        'Manage chronic conditions',
        'Enhance quality of life',
      ],
      conditions: ['Arthritis', 'Osteoporosis', 'Balance disorders', 'General weakness', 'Chronic pain'],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 to-teal-600 text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive physiotherapy solutions tailored to your unique needs and recovery goals
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <Link
                      to="/appointment"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Conditions We Treat</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.conditions.map((condition, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Recovery?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a consultation with our expert team and start your journey to better health
          </p>
          <Link
            to="/appointment"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
