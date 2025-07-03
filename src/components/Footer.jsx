import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-12 px-6 shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pt-3 pb-6" style={{ padding: "40px" }}>

        {/* Column 1: About */}
        <div className="space-y-4" style={{ padding: "0px 70px 0px 10px" }}>
          <h3 className="text-2xl font-bold text-cyan-400">Prithivi Raj</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Full Stack Developer crafting scalable, elegant, and user-friendly web apps with React, Tailwind & Node.js. Passionate about clean UI and smooth UX.
          </p>
          <div className="space-y-1 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" />
              Tamil Nadu, India
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" />
              prithiviphr777@example.com
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-cyan-300">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#aboutme" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#education" className="hover:text-cyan-400 transition">Education</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            <li>
              <a download href="./src/assets/Prithiviraj T(Resume).pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400">
                <FaFileAlt /> Resume 📄
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-cyan-300">Connect with Me</h4>
          <div className="flex gap-5 text-xl">
            <a href="https://github.com/prithivi043" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prithiviraj-t-35a930291/" target="_blank" rel="noopener noreferrer" className=" text-2xl hover:text-cyan-400 scale-110 tra" style={{ padding: "0px 10px 0px 10px" }}>
              <FaLinkedin />
            </a><span></span>
            <a href="mailto:prithiviphr777@example.com" className="text-2xl hover:text-cyan-400">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm text-gray-400 italic">
            “Building with purpose, passion, and precision.”
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} <span className="text-cyan-400">Prithiviraj T</span>. Built with ❤️ using React & Tailwind CSS.
      </div>
    </footer>
  );
}
