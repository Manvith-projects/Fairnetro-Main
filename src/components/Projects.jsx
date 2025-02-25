import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectGroups = [
    [
      { id: 1, title: "Title 1", description: "Description 1", imageUrl: "https://placehold.co/600x400", link: "#" },
      { id: 3, title: "Title 3", description: "Description 3", imageUrl: "https://placehold.co/600x400", link: "#" },
    ],
    [
      { id: 2, title: "Title 2", description: "Description 2", imageUrl: "https://placehold.co/600x700", link: "#" },
      { id: 4, title: "Title 4", description: "Description 4", imageUrl: "https://placehold.co/600x400", link: "#" },
    ],
  ];

  return (
    <div className="projects mt-10 px-5">
      {/* Title Animation */}
      <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <motion.p
        className="text-center fs-5 mt-2"
        style={{ color: "#b2b3b3" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Here are some of the projects we have worked on.
      </motion.p>

      {/* Grid Layout: 2x2 Grouped */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {projectGroups.map((group, index) => (
          <div key={index} className="flex flex-col gap-6">
            {group.map((project) => (
              <motion.div
                key={project.id}
                className="flex flex-col text-white p-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Image Hover Effect */}
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <h4 className="text-lg font-semibold mt-3">{project.title}</h4>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <a href={project.link} className="text-blue-500 font-medium mt-3">
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
