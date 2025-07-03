import { FaBook, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import '../../CSS/font.css'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 pt-16 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-6">
      
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-3 ">
            <FaBook className="text-3xl" />
            <span className="text-3xl font-bold tracking-wide lobster">Mini<span className="text-[#DE3241]">-Library</span></span>
          </div>
          <p className="text-gray-600 max-w-xs text-center md:text-left">
            Your minimalistic digital library to manage books and borrowing efficiently.
          </p>
        </div>

        {/* links */}
        <div className="text-center md:text-left">
          <h3 className="text-gray-800 font-bold mb-3 text-xl">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 font font-semibold">
            <li>
              <a href="/" className="hover:text-[#DE3241] transition">All Books</a>
            </li>
            <li>
              <a href="/create-book" className="hover:text-[#DE3241] transition">Add Book</a>
            </li>
            <li>
              <a href="/borrow-summary" className="hover:text-[#DE3241] transition">Borrow Summary</a>
            </li>
          </ul>
        </div>

        {/* icons */}
        <div className="text-center md:text-left">
          <h3 className="text-gray-800 font-semibold mb-3 text-xl">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-xl text-gray-600">
            <a href="#" aria-label="Facebook" className="hover:text-[#DE3241] transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#DE3241] transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#DE3241] transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 py-6 text-center text-gray-800 text-sm">
        © 2025 Mini Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
