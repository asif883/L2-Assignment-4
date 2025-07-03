import { FaArrowRight } from "react-icons/fa6";
import image from '../../assets/library-concept-illustration.png';
import '../../CSS/font.css'

const HeroSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 ">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font">
            Turn the Page. Transform Your World
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A minimal and user-friendly library management system to organize, explore, and borrow books easily.
          </p>
          <a
            href="/all-books"
            className="inline-flex items-center gap-2 bg-[#ff5558] hover:bg-[#DE3241] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
          >
            Explore Library <FaArrowRight />
          </a>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Library Illustration"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
