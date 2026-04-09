import { Star, Quote } from 'lucide-react';

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

interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  review: string;
  created_at: string;
}

export default function Testimonials() {

  const stats = [
    { value: '2000+', label: 'Happy Patients' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '95%', label: 'Would Recommend' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 to-teal-600 text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Patient Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who have experienced transformative care at RevivePhysio
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group"
                >
                  <Quote className="h-10 w-10 text-blue-200 mb-4 group-hover:text-blue-300 transition-colors" />

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.review}"
                  </p>

                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.service}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Share Your Experience</h2>
          <p className="text-xl text-gray-700 mb-8">
            Have you been treated at RevivePhysio? We'd love to hear about your experience.
          </p>
          <a
            href="mailto:info@revivephysio.com?subject=Patient Testimonial"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Submit Your Review
          </a>
        </div>
      </section>
    </div>
  );
}
