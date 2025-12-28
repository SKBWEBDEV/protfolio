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
    <div className="py-50">
      <div className="max-w-200 mx-auto h-150 relative bg-gray-700  rounded-lg shadow-lg">
        <img
          src={projects[current].image}
          alt={projects[current].title}
          className="w-full mx-auto h-100 object-cover rounded"
        />

        <div className="text-center">
          <div className="mt-2 flex flex-wrap gap-3 justify-center">
            {projects[current].technologies.map((tech, index) => (
              <span
                key={index}
                className="text-white text-sm bg-violet-700 px-3 font-semibold py-1 rounded">
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-2 font-bold text-[40px] text-amber-400">{projects[current].description}</p>

          <div className="flex justify-center gap-5">
            <a
            href={projects[current].liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-400 font-semibold transition-all duration-300">
            Live Project
          </a>

          <a
            href={projects[current].githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-blue-600 hover:bg-green-400 font-semibold transition-all duration-300 text-white px-4 py-2 rounded">
            githubLink
          </a>
          </div>

        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevProject}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 
        rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={nextProject}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 
        rounded-full"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Project;
