export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">

        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-white">MyBrand</h2>
          <p className="mt-4 text-sm text-gray-400">
            Delivering quality products with a modern user experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-3">
            Get latest updates and offers.
          </p>
          <div className="flex items-center bg-slate-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 w-full outline-none text-sm"
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-sm text-white">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}