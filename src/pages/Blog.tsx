import { useState } from "react";
import { Calendar, ArrowRight, Tag } from "lucide-react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const loading = false;
  
  const posts = [
    {
      id: 1,
      title: "5 Exercises to Reduce Back Pain",
      excerpt:
        "Simple physiotherapy exercises you can do daily to relieve lower back pain and improve posture.",
      category: "Back Pain",
      created_at: "2026-03-20",
    },
    {
      id: 2,
      title: "How to Recover Faster from Sports Injuries",
      excerpt:
        "Learn effective recovery techniques including stretching, rest, and physiotherapy care.",
      category: "Sports Injury",
      created_at: "2026-03-18",
    },
    {
      id: 3,
      title: "Neck Pain Causes & Treatment",
      excerpt:
        "Understand why neck pain happens and how physiotherapy helps in long-term recovery.",
      category: "Neck Pain",
      created_at: "2026-03-15",
    },
    {
      id: 4,
      title: "Benefits of Physiotherapy After Surgery",
      excerpt:
        "Post-surgery rehabilitation is important. Here’s how physiotherapy speeds up healing.",
      category: "Rehabilitation",
      created_at: "2026-03-10",
    },
    {
      id: 5,
      title: "Home Remedies for Knee Pain",
      excerpt:
        "Try these safe and effective home remedies along with physiotherapy exercises.",
      category: "Knee Pain",
      created_at: "2026-03-05",
    },
  ];

  // ✅ Categories
  const categories = ["All", ...new Set(posts.map((p) => p.category))];

  // ✅ Filter
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white pt-32 pb-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Physiotherapy Health Blog
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Expert tips, recovery guides, and wellness advice for a pain-free life
        </p>
      </section>

      {/* BLOG LIST */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* BLOG CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="h-40 flex items-center justify-center text-5xl bg-blue-100">
                  🏥
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Tag size={14} /> {post.category}
                    <Calendar size={14} className="ml-3" />
                    {formatDate(post.created_at)}
                  </div>

                  <h2 className="font-bold text-lg mb-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-3">
                    {post.excerpt}
                  </p>

                  <button className="text-blue-600 flex items-center gap-1">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY */}
          {filteredPosts.length === 0 && (
            <p className="text-center mt-10 text-gray-500">
              No articles found
            </p>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Get physiotherapy tips and health advice directly to your inbox
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter email"
            className="border px-4 py-2 rounded w-full"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}