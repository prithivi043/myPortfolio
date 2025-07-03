import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiFigma,
  SiExpress,
  SiMongodb,
  SiBootstrap
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Ido() {
  return (
    <section id="ido"
      className="flex flex-col md:flex-row justify-around items-center px-6 py-16 min-h-screen 
                 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
    >
      {/* LEFT Image */}
      <motion.div
        className="w-60 h-65 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="./src/assets/profile-prithivi.jpg"
          alt="Prithivi - Developer"
          className="rounded-xl object-cover w-full h-full shadow-2xl ring-2 ring-blue-400"
        />
      </motion.div>

      {/* RIGHT Content */}
      <motion.div
        className="max-w-xl mb-12 md:mb-0 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-500 leading-snug drop-shadow-lg">
          What I Do
        </h2>

        <p className="text-lg md:text-xl text-gray-200 mb-6 tracking-wide leading-relaxed">
          I’m a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> who blends design with development to craft seamless digital experiences.
          I write scalable code, build responsive interfaces, and deploy cloud-native applications.
        </p>

        <p className="text-base md:text-lg text-slate-300 mb-6">
          I use <span className="text-pink-400 font-semibold">color theory</span> to bring emotional impact and <span className="text-indigo-300 font-semibold">typography</span> for visual clarity.
          My goal is to make every user interface <span className="text-teal-300 font-semibold">engaging</span>, <span className="text-yellow-300 font-semibold">accessible</span>, and <span className="text-purple-400 font-semibold">meaningful</span>.
        </p>

        <h4 className="text-2xl font-semibold mb-4 text-cyan-400">
          Tech Stack & Tools
        </h4>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-6 text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SiFigma title="Figma" className="text-pink-400 hover:scale-110 transition-transform" />
          <SiHtml5 title="HTML5" className="text-orange-500 hover:scale-110 transition-transform" />
          <SiCss3 title="CSS3" className="text-blue-500 hover:scale-110 transition-transform" />
          <SiTailwindcss title="Tailwind CSS" className="text-teal-400 hover:scale-110 transition-transform" />
          <SiJavascript title="JavaScript" className="text-yellow-400 hover:scale-110 transition-transform" />
          <SiReact title="React.js" className="text-cyan-400 hover:scale-110 transition-transform" />
          <SiExpress title="Express.js" className="text-gray-400 hover:scale-110 transition-transform" />
          <SiMongodb title="MongoDB" className="text-green-500 hover:scale-110 transition-transform" />
          <SiGithub title="GitHub" className="text-gray-300 hover:scale-110 transition-transform" />
          <SiBootstrap title="Bootstrap" className="text-purple-600 hover:scale-110 transition-transform" />

        </motion.div>
      </motion.div>
    </section>
  );
}
