import Container from "../container/Container";
import sakib from "../../assets/image.png";
import { Link } from "react-router";
const Navber = () => {
  return (
    <div className="bg-[#0f172a]/0 fixed  w-full z-50">
      <Container>
        <div className="flex items-center justify-between py-4 px-5  text-[#e5e7eb]">
          <div className="w-10 ">
            <img className="rounded-full" src={sakib} alt="" />
          </div>
          <div>
            <ul className="flex gap-10 font-semibold text-gray-200">
              <li>
                <Link
                  to="/banner"
                  className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-sky-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/skill"
                  className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-sky-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
                >
                  Skills
                </Link>
              </li>

              <li className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:rounded-full after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full">
                Projects
              </li>
              <li
                className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-sky-400 after:rounded-full
                 after:transition-all after:duration-300 hover:after:w-full"
              >
                Experience
              </li>
              <li
                className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-sky-400 after:rounded-full
                 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
