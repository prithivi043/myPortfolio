import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-around bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white min-h-screen px-8 pt-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Left Content */}
      <motion.div
        className="max-w-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Name Badge */}
        <div className="inline-block mb-2 px-4 py-1 bg-white/10 text-cyan-400 font-semibold text-sm rounded-full border border-cyan-500 shadow-sm backdrop-blur-sm tracking-wide">
          Prithiviraj T
        </div>

        <h1 className="text-4xl font-semibold mb-4 text-white drop-shadow">
          Hey, I'm Prithivi
        </h1>

        <p className="text-xl md:text-2xl font-medium mb-2 text-gray-100">
          I craft user-friendly websites with <br />
          <span className="text-yellow-400">
            <TypeAnimation
              sequence={[
                'Front-End Developer.', 2000,
                'Back-End Developer.', 2000,
                'Digital Marketer.', 2000,
                'UI Designer.', 2000,
                'Coding with logic.', 2000,
              ]}

              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </p>

        {/* Summary */}
        <p className="text-base md:text-lg text-gray-200 mt-4 leading-relaxed tracking-wide">
          I'm a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> who merges clean code with visual storytelling. My focus lies in building intuitive interfaces, responsive layouts, and scalable backend systems. I thrive on learning, collaborating, and turning ideas into impactful digital products. Let’s build something meaningful together!
        </p>

        {/* Socials */}
        <div className="flex space-x-4 mt-6 mb-4">
          <a
            href="https://github.com/prithivi043"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-4xl text-black bg-white rounded-full p-1 hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/prithiviraj-t-35a930291/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin className="text-4xl text-sky-600 bg-sky-900 rounded-lg p-2 hover:scale-110 transition-transform" />
          </a>
        </div>


        {/* Button */}
        <button className="px-6 py-2 bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600 transition rounded">
          <a href="#contact">Contact Me</a>
        </button> <span>  </span>
        <button className="m-3">
          <a
            href="./assets/Prithiviraj T(Resume).pdf"
            download
            class="px-6 py-2 bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600 transition rounded"
          >
            Resume 📄
          </a>
        </button>


      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img
          src="./assets/New Projecttt.jpg"
          alt="Profile"
          loading="lazy"
          className="rounded-lg h-65 w-60 object-cover hover:scale-105 transition-transform"
        />
      </motion.div>
    </motion.div>
  );
}
