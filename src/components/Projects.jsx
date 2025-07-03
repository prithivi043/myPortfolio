import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "To-Do List App",
    description: "A clean React-based task manager with local storage support for persistent productivity.",
    image: "https://sloboda-studio.com/wp-content/uploads/2020/10/image22.jpeg",
    link: "https://github.com/prithivi043/ToDoApp",
  },
  {
    title: "Restaurant Booking App",
    description: "An HTML, CSS, and JS based restaurant table reservation interface with confirmation features.",
    image: "https://www.shutterstock.com/image-vector/3d-isometric-flat-vector-concept-260nw-1740407300.jpg",
    link: "https://github.com/prithivi043/RestaurantBookingSystem",
  },
  {
    title: "Recipe App",
    description: "Responsive recipe application built using React & TailwindCSS with search and filter functionality.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4dfxexf1I1qSV2Qc2hCqkB9dapYpmT5fzQ&s-b",
    link: "https://github.com/prithivi043/Recipee-App",
  },
  {
    title: "Chat App",
    description: "A real-time chat interface created using React, TailwindCSS, and Firebase integration.",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/IMG-02-Guided%20Tour-Post%20HO-1100x600?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=100&fit=constrain",
    link: "https://github.com/prithivi043/chatApp",
  },
  {
    title: "Landing Page",
    description: "Elegant landing page for a fictional service built using only HTML, CSS, and vanilla JS.",
    image: "https://unbounce.com/photos/best-landing-page-design-examples_vertical.webp",
    link: "https://github.com/prithivi043/CodSoft_LandingPage",
  },
  {
    title: "Gym App UI - Figma",
    description: "A modern gym application UI with vibrant gradients and intuitive layout designed in Figma.",
    link: "https://www.linkedin.com/posts/prithiviraj-t-35a930291_this-is-my-figma-design-for-fitness-app-activity-7274033892997640192-jkUD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbLcPYBRL76ISzSAnYZXTS-iO0N8jpOTkM",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2NDRUcul4HIJSH4qY65tMD_DHCSfeN8grw&s"
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 drop-shadow-sm">
          My <span className="text-yellow-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-md hover:shadow-cyan-500/30 transition duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 shadow"
              />

              <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.link}
                className="text-cyan-300 font-medium underline hover:text-cyan-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
