import React from "react";
import { FaUniversity, FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

const educationTimeline = [
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science and Business Systems",
    institution: "E.G.S. Pillay Engineering College, Nagapattinam",
    description:
      "Currently pursuing B.Tech CSBS under Anna University. Focused on full-stack development, cloud computing, and business-integrated technologies with hands-on project experience.",
    icon: <FaUniversity className="text-white text-lg" />,
    dotColor: "bg-blue-500"
  },
  {
    year: "2020 - 2022",
    title: "HSC - Higher Secondary Education",
    institution: "Sriniva Higher Secondary School, Tamil Nadu",
    description:
      "Completed 12th with specialization in Computer Science and Mathematics. Built foundational skills in logic, programming, and problem-solving.",
    icon: <FaSchool className="text-white text-lg" />,
    dotColor: "bg-purple-500"
  },
  {
    year: "2019 - 2020",
    title: "SSLC - Secondary Education",
    institution: "Sriniva Higher Secondary School, Tamil Nadu",
    description:
      "Completed 10th standard with strong academic performance and keen interest in science and technology.",
    icon: <FaChalkboardTeacher className="text-white text-lg" />,
    dotColor: "bg-yellow-500"
  }
];


export default function EducationJourney() {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto relative ">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Education Journey
        </h2>

        {/* Vertical Line */}
        <div className="absolute left-6 top-0 h-full w-[2px] bg-yellow-400"></div>

        <div className="space-y-14 pl-16 relative z-10 ">
          {educationTimeline.map((edu, index) => (
            <motion.div
              key={index}
              className="relative hover:shadow-cyan-500/30 transition duration-300 bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-md mb-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot with Pulse */}
              <div className={`absolute -left-[2.6rem] top-1 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-pulse ${edu.dotBgClass}`}>
                {edu.icon}
              </div>

              {/* Timeline Content */}
              <p className="text-sm text-gray-300 mt-2">{edu.year}</p>
              <h3 className="text-xl font-semibold text-yellow-300">{edu.title}</h3>
              <h4 className="text-md font-medium text-blue-300 mb-1">{edu.institution}</h4>
              <p className="text-sm text-gray-200 leading-relaxed mb-1">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
