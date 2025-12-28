import { BsFileEarmarkTextFill } from "react-icons/bs";
import Container from '../container/Container';
import { FaArrowRight, FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from 'rsuite/Image';
import 'rsuite/Image/styles/index.css';
import image from "../../assets/image.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className='pt-40 h-screen bg-black/50'> 
      <Container>
        <div className="flex  flex-col md:flex-row items-center  md:gap-70">

          {/* Left Text */}
          <div className='flex-1 text-center md:text-left'>
            <p className='text-white font-bold text-2xl sm:text-3xl md:text-4xl'>Hello, It's Me</p>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-amber-300 md:mt-10 mt-2'>MD SHAKIB</h1>
            <h2 className='md:mt-10 text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-red-500 via-yellow-300 to-cyan-300 bg-clip-text text-transparent mt-2'>
              And I'm a Front-End Web <br /><span>Developer</span>
            </h2>
            <h4 className='md:mt-10 font-semibold text-lg sm:text-xl md:text-2xl bg-linear-to-r from-[#9900FF] via-red-500 to-amber-400 text-transparent bg-clip-text mt-4'>
              I'm a Student Of Creative IT Institute.
            </h4>
            <p className='md:mt-10 text-sm md:w-140 sm:text-base md:text-lg mt-4 bg-linear-to-r from-[#F5F5F5] via-red-500 to-amber-400 text-transparent bg-clip-text'>
              I specialize in creating pixel-perfect, high-performance Website & web applications using modern technologies like HTML, CSS, Bootstrap, Tailwind, React & Javascript.
            </p>

            {/* Buttons */}
            <div className='md:mt-10 mt-6 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center md:justify-start'>
              <button className='flex items-center justify-center rounded-lg cursor-pointer text-sm sm:text-base md:text-lg font-semibold gap-2 sm:gap-3 bg-white transition-all duration-300 hover:text-white hover:bg-[#FD1D1D] px-6 sm:px-8 py-3'>
                View My Work <FaArrowRight />
              </button>

              <button className='flex items-center justify-center rounded-lg cursor-pointer text-sm sm:text-base md:text-lg font-semibold gap-2 sm:gap-3 bg-[#FD1D1D] px-6 sm:px-8 py-3 transition-all duration-300 hover:text-black text-white hover:bg-white'>
                <BsFileEarmarkTextFill /> Download CV
              </button>
            </div>

            {/* Social Icons */}
            <div className="mt-6 md:mt-10 flex justify-center md:justify-start gap-3 sm:gap-4 text-white">
              <a href="https://github.com/SKBWEBDEV" className="p-2 sm:p-3 rounded-full border border-gray-400 hover:bg-gray-700 transition-colors"><FaGithub /></a>
              <a href="#" className="p-2 sm:p-3 rounded-full border border-gray-400 hover:bg-gray-700 transition-colors"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/feed/" className="p-2 sm:p-3 rounded-full border border-gray-400 hover:bg-gray-700 transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="p-2 sm:p-3 rounded-full border border-gray-400 hover:bg-gray-700 transition-colors"><FaTwitter /></a>
              <a href="#" className="p-2 sm:p-3 rounded-full border border-gray-400 hover:bg-gray-700 transition-colors"><IoMdMail /></a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 md:block hidden  justify-center md:justify-end">
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: 1,
      borderColor: ["#6366f1","#22d3ee","#ec4899","#facc15","#10b981","#6366f1"]
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    whileHover={{ scale: 1.05 }}
    className="w-48 sm:w-60 md:w-96 h-48 sm:h-72 md:h-96 rounded-full border-4 border-blue-500 p-1 overflow-hidden flex justify-center items-center"
    style={{ minWidth: '180px', minHeight: '180px' }} // prevent too small on very small screens
  >
    <Image
      src={image}
      alt="profile"
      width={384}
      height={384}
      className="rounded-full object-cover w-full h-full"
    />
  </motion.div>
</div>


        </div>
      </Container>
    </div>
  );
};

export default Banner;
