import { BsFileEarmarkTextFill } from "react-icons/bs";
import Container from '../container/Container'
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from 'rsuite/Image';
import 'rsuite/Image/styles/index.css';
import image from "../../assets/image.png"
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className='bg-black/50 py-50 h-screen'>
      <Container>
      <div className='flex'>

  
    <div className=' w-full h-full '>
      <p className='text-white font-bold text-[30px]'>Hello, It's Me</p>
      <h1 className='font-bold text-amber-300 text-[70px]'>MD SHAKIB</h1>
      <h2 className='text-4xl font-bold bg-linear-to-r from-red-500 via-yellow-300 to-cyan-300 bg-clip-text text-transparent'>
        And I'm a Front-End Web <br /> <span>Developer</span>
      </h2>
      <h4 className='font-semibold text-[30px] bg-linear-to-r from-[#9900FF] via-red-500 to-amber-400 text-transparent bg-clip-text mt-5'>
        I'm a Student Of Creative IT Institute.
      </h4>
      <p className='w-130 text-[25px] font-semibold  bg-linear-to-r from-[#F5F5F5] via-red-500 to-amber-400 text-transparent bg-clip-text mt-7'>
        I specialize in creating pixel-perfect, high-performance Website & web applications using modern technologies like HTML, CSS, Bootstrap, Tailwind, React & Javascript.
      </p>

      <div className='mt-5 flex gap-15'>
        <button className='flex items-center rounded-lg cursor-pointer text-[18px] font-semibold  gap-3.5 bg-white transition-all duration-300 hover:text-white hover:bg-[#FD1D1D] px-10 py-4 text-'>View My Work <span><FaArrowRight /></span></button>

        <button className='flex items-center rounded-lg cursor-pointer text-[18px] font-semibold  gap-3.5 
        bg-[#FD1D1D] px-10 py-4 transition-all duration-300 hover:text-black text-white hover:bg-white'> <span><BsFileEarmarkTextFill /></span>Download CV</button>
      </div>

      <div className="mt-8">
        <ul className="text-white flex items-center gap-9">
          <a href="https://github.com/SKBWEBDEV"><li className="bg-black/50 px-5 py-4 rounded-2xl cursor-pointer border-2 border-white/20">
          <FaGithub/></li></a>

          <li className="bg-black/50 px-5 py-4 rounded-2xl cursor-pointer border-2 border-white/20">
          <FaFacebookF/></li>

          <a href="https://www.linkedin.com/feed/"><li className="bg-black/50 px-5 py-4 rounded-2xl cursor-pointer border-2 border-white/20">
          <FaLinkedinIn/></li></a>

          <li className="bg-black/50 px-5 py-4 rounded-2xl cursor-pointer border-2 border-white/20">
          <FaTwitter/></li>

          <li className="bg-black/50 px-5 py-4 rounded-2xl cursor-pointer border-2 border-white/20">
          <IoMdMail/></li>

        </ul>
      </div>

    </div>


<div className="flex justify-center items-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: 1,
      borderColor: [
        "#6366f1",
        "#22d3ee",
        "#ec4899",
        "#facc15",
        "#10b981",
        "#6366f1",
      ], // random colors sequence
    }}
    transition={{
      duration: 10,   // total cycle duration
      repeat: Infinity, // loop forever
      ease: "linear",
    }}
    whileHover={{ scale: 1.1 }}
    className="w-96 h-96 rounded-full border-4 p-1 border-blue-500 overflow-hidden flex justify-center items-center"
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


  )
}

export default Banner
