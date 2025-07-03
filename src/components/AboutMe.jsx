import React from "react";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="aboutme" className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-blue-400 drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h1>

        {/* Subparagraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’m a <span className="text-cyan-400 font-semibold">passionate full-stack developer</span> who blends logic and creativity. I build interactive user experiences, clean UIs, and performance-optimized applications that solve real-world problems with scalable design and meaningful impact.
        </motion.p>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Box */}
          <motion.div
            className="bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg rounded-xl p-6 hover:shadow-cyan-500/30 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaLaptopCode className="text-cyan-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-cyan-200 mb-2">Projects</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Built interactive apps like <strong>To-Do List</strong>, <strong>Recipe App</strong>, <strong>Restaurant Booking System</strong>, and <strong>Chat App</strong>, along with visually appealing <strong>Gym & Music App UIs</strong> in Figma. Skilled in <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>API integration</strong>.
            </p>

          </motion.div>

          {/* Education Box */}
          <motion.div
            className="bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg rounded-xl p-6 hover:shadow-purple-500/30 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap className="text-purple-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-purple-200 mb-2">Education</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              <p className="text-gray-200 text-sm leading-relaxed">
                Final year <strong>B.Tech CSBS</strong> student at <strong>EGS Pillay Engineering College</strong>. Certified in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Full Stack Development</strong> through <strong>Datanerdz.AI</strong> and <strong>Great Learning</strong>.
              </p>

            </p>
          </motion.div>

          {/* Skills Box */}
          <motion.div
            className="bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg rounded-xl p-6 hover:shadow-yellow-400/30 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaCode className="text-yellow-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-200 mb-2">Skills</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              <p className="text-gray-200 text-sm leading-relaxed">
                Proficient in <strong>React.js</strong>, <strong>Tailwind CSS</strong>, <strong>JavaScript</strong>, <strong>HTML/CSS</strong>. Familiar with <strong>MongoDB</strong>, <strong>Express</strong>, <strong>Python</strong>, <strong>Java</strong>, <strong>Figma</strong>, <strong>Git</strong>, and web animations using <strong>motion</strong>.
              </p>

            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
