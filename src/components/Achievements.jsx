import React from 'react';
import { FaCertificate, FaLaptopCode, FaTrophy, FaBullhorn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const achievements = [


  {
    title: "Intern at CODEALPHA",
    description: "Worked as Full Stack Developer Intern on real-time tasks.",
    icon: <FaLaptopCode className="text-teal-300 text-4xl mb-3" />
  },
  {
    title: "30-Day Fullstack Program",
    description: "Completed fullstack development bootcamp at NoviTech (React, MongoDB, Node).",
    icon: <FaLaptopCode className="text-green-400 text-4xl mb-3" />
  },
  {
    title: "Digital Marketing Intern",
    description: "One-month internship at Datanerdz.AI working on social media campaigns and branding.",
    icon: <FaBullhorn className="text-pink-400 text-4xl mb-3" />
  },
  {
    title: "Frontend Development Intern",
    description: "One-month internship at CodSoft focused on responsive frontend UI using React & TailwindCSS.",
    icon: <FaLaptopCode className="text-blue-400 text-4xl mb-3" />
  },
  {
    title: "Datanerdz.AI Top 10 Performer",
    description: "Top 10 in web development contest by Datanerdz.AI with real-world design and deployment.",
    icon: <FaTrophy className="text-orange-400 text-4xl mb-3" />
  },
  {
    title: "NPTEL Certification",
    description: "Completed Cloud Computing course via NPTEL with certification.",
    icon: <FaCertificate className="text-purple-300 text-4xl mb-3" />
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-12">
          Achievements & <span className="text-cyan-400">Milestones</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-md hover:scale-105 hover:shadow-lg transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                {ach.icon}
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">{ach.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
