import { FaBook, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-50 text-gray-800 pt-16 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-3">
            <FaBook className="text-indigo-400 text-3xl" />
            <span className="text-2xl font-bold tracking-wide">Mini Library</span>
          </div>
          <p className="text-gray-400 max-w-xs text-center md:text-left">
            Your minimalistic digital library to manage books and borrowing efficiently.
          </p>
        </div>

        {/* links */}
        <div className="text-center md:text-left">
          <h3 className="text-indigo-300 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-400 transition">All Books</a>
            </li>
            <li>
              <a href="/create-book" className="hover:text-indigo-400 transition">Add Book</a>
            </li>
            <li>
              <a href="/borrow-summary" className="hover:text-indigo-400 transition">Borrow Summary</a>
            </li>
          </ul>
        </div>

        {/* icons */}
        <div className="text-center md:text-left">
          <h3 className="text-indigo-500 font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-xl text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-400 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-indigo-500 py-4 text-center text-gray-800 text-sm">
        © 2025 Mini Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
