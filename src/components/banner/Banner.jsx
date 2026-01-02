import { BsFileEarmarkTextFill } from "react-icons/bs";
import Container from '../container/Container';
import { FaArrowRight, FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from 'rsuite/Image';
import 'rsuite/Image/styles/index.css';
import image from "../../assets/image.png";
import { motion } from "framer-motion";

import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <div className='pt-40 h-screen '> 
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
            <div>
              <StyledWrapper>
      <ul className="wrapper">
        <li className="icon instagram">
          <span className="tooltip">Github</span>
          <a href="https://github.com/SKBWEBDEV"><FaGithub/></a>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Facebook</span>
          <a href="https://www.facebook.com/"><FaFacebookF/></a>
        </li>
        <li className="icon instagram">
          <span className="tooltip">LinkedIn</span>
          <a href="https://www.linkedin.com/feed/"><FaLinkedinIn/></a>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Twitter</span>
          <a href=""><FaTwitter/></a>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Mail</span>
          <IoMdMail/>
        </li>
      </ul>
           </StyledWrapper>
            </div>
            {/* Social Icons */}
            


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
    className="w-48 sm:w-60 md:w-96 h-48 sm:h-72 md:h-96 rounded-full border-4 overflow-hidden flex justify-center items-center"
    style={{ minWidth: '180px', minHeight: '180px' }} >
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

const StyledWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    // justify-content: center;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .facebook:hover,
  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #1877f2;
    color: #fff;
  }

  .wrapper .twitter:hover,
  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
  }`;

export default Banner;
