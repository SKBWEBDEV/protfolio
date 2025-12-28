import React, { useState } from "react";
import nexcent from "../../assets/nexcent.png";
import fb from "../../assets/fb.png";
import orebi from "../../assets/orebi.png";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Nexcent",
    image: nexcent,
    liveLink: "https://nexcent-woad-pi.vercel.app/",
    githubLink: "https://github.com/SKBWEBDEV/nexcent",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Node Js"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "FaceBook",
    image: fb,
    liveLink: "https://facebook-y8y1.vercel.app",
    githubLink: "https://github.com/SKBWEBDEV/facebook",
    technologies: ["HTML", "CSS", "JavaScript", "Node Js"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Orebi Shoping",
    image: orebi,
    liveLink: "https://orebi-nine-chi.vercel.app/",
    githubLink: "https://github.com/SKBWEBDEV/orebi",
    technologies: ["React", "JavaScript", "Node Js"],
  },
];

const Project = () => {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="py-16 bg-black/50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl relative bg-gray-700 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        
        {/* Project Image */}
        <img
          src={projects[current].image}
          alt={projects[current].title}
          className="w-full h-64 sm:h-72 md:h-96 object-cover rounded"
        />

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {projects[current].technologies.map((tech, index) => (
            <span
              key={index}
              className="text-white text-xs sm:text-sm md:text-base bg-violet-700 px-2 sm:px-3 py-1 rounded font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-3 text-center font-bold text-lg sm:text-xl md:text-2xl text-amber-400">
          {projects[current].description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <a
            href={projects[current].liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-green-400 text-white px-4 py-2 rounded font-semibold transition-all duration-300"
          >
            Live Project
          </a>
          <a
            href={projects[current].githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-green-400 text-white px-4 py-2 rounded font-semibold transition-all duration-300"
          >
            Github Link
          </a>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevProject}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full sm:p-3 md:p-4 hover:bg-gray-600 transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextProject}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full sm:p-3 md:p-4 hover:bg-gray-600 transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Project;
