import { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
// import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  created_at: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // fetchPosts();
  }, []);

  // const fetchPosts = async () => {
  //   try {
  //     const { data } = await supabase
  //       .from('blog_posts')
  //       .select('*')
  //       .eq('is_published', true)
  //       .order('created_at', { ascending: false });

  //     if (data) setPosts(data);
  //   } catch (error) {
  //     console.error('Error fetching blog posts:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))];

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 to-teal-600 text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Health & Wellness Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Expert advice, recovery tips, and the latest insights in physiotherapy and rehabilitation
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all group overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center text-6xl">
                    📝
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </span>
                      <span className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(post.created_at)}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Informed</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest health tips, recovery guides, and clinic updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
