export default function MoneyMakingWebsite() {
  const products = [
    {
      title: 'Running Shoes',
      description: 'Top lightweight running shoes for beginners and advanced runners.',
      price: '$89',
      link: '#'
    },
    {
      title: 'Gaming Keyboard',
      description: 'Mechanical keyboard with RGB lighting and fast response.',
      price: '$59',
      link: '#'
    },
    {
      title: 'Wireless Headphones',
      description: 'Noise-cancelling headphones with long battery life.',
      price: '$120',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-black text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">DealBoost</h1>
          <nav className="flex gap-6 text-sm md:text-base">
            <a href="#products" className="hover:text-gray-300">Products</a>
            <a href="#how" className="hover:text-gray-300">How It Works</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-extrabold mb-6">Find The Best Online Deals</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A simple affiliate-style website that can earn money from ads, affiliate links, or sponsorships.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-black text-white px-6 py-3 rounded-2xl shadow hover:scale-105 transition">
            Start Browsing
          </button>
          <button className="bg-white border px-6 py-3 rounded-2xl shadow hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>
      </section>

      <section id="products" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-3xl font-bold mb-8">Trending Products</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="h-40 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center text-gray-500">
                Product Image
              </div>

              <h4 className="text-2xl font-semibold mb-2">{product.title}</h4>
              <p className="text-gray-600 mb-4">{product.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">{product.price}</span>
                <a
                  href={product.link}
                  className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90"
                >
                  Buy
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="bg-white mt-16 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">How This Website Can Make Money</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-3xl shadow-sm">
              <h4 className="text-xl font-semibold mb-3">Affiliate Links</h4>
              <p className="text-gray-600">
                Earn a commission when visitors buy products through your links.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-3xl shadow-sm">
              <h4 className="text-xl font-semibold mb-3">Ads</h4>
              <p className="text-gray-600">
                Add Google AdSense or other ad networks once you get traffic.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-3xl shadow-sm">
              <h4 className="text-xl font-semibold mb-3">Sponsorships</h4>
              <p className="text-gray-600">
                Brands may pay to feature products on your homepage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto py-16 px-6">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-3xl font-bold mb-4">Contact</h3>

          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="email"
              placeholder="Your email"
              className="border rounded-xl px-4 py-3"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="border rounded-xl px-4 py-3"
            />

            <button className="bg-black text-white py-3 rounded-2xl hover:opacity-90">
              Send
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-6 mt-10">
        <p>© 2026 DealBoost. All rights reserved.</p>
      </footer>
    </div>
  );
}
