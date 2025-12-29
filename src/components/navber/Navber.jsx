import { useState } from "react";
import Container from "../container/Container";
import sakib from "../../assets/image.png";
import { Link } from "react-router";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50  backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-4">

          {/* LOGO */}
          <div className="w-10">
            <img className="rounded-full" src={sakib} alt="Logo" />
          </div>

          {/* Hamburger button (mobile) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 focus:outline-none text-2xl"
            >
              {isOpen ? "✕" : "☰"} 
            </button>
          </div>

          {/* MENU */}
          <ul className={`
            flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-10 font-semibold text-gray-200
            absolute sm:static top-full left-0 w-full sm:w-auto bg-[#0f172a]/90 sm:bg-transparent
            transition-all duration-300 ease-in-out 
            ${isOpen ? "max-h-96 opacity-100 py-4 flex" : "max-h-0 opacity-0 sm:opacity-100 sm:flex sm:py-0"}
          `}>
            <li><Link to="/banner" className="hover:text-sky-400 block px-4 sm:px-0">About</Link></li>
            <li><Link to="/skill" className="hover:text-sky-400 block px-4 sm:px-0">Skills</Link></li>
            <li><Link to="/project" className="hover:text-sky-400 block px-4 sm:px-0">Projects</Link></li>
            <li><Link to="/experience" className="hover:text-sky-400 block px-4 sm:px-0">Experience</Link></li>
            <li><Link to="/contact" className="hover:text-sky-400 block px-4 sm:px-0">Contact</Link></li>
            {/* <li className="hover:text-sky-400 cursor-pointer block px-4 sm:px-0">Contact</li> */}
          </ul>

        </div>
      </Container>
    </div>
  );
};

export default Navber;
