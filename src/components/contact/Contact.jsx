import Container from "../container/Container"
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="py-50">

  <Container>

    <div className="text-white flex flex-col lg:flex-row lg:justify-between gap-10">

      {/* ---------------- LEFT PART ---------------- */}
      <div className="w-full lg:w-1/2">

        <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] leading-tight font-bold">
          Let's Build Something <span className="text-[#F45C43]">Amazing</span> Together
        </h1>

        <p className="mt-5 font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-[#EDE574]">
          Whether you have a specific project in mind or just want to chat about the latest tech, I'm always open to new conversations.
        </p>

        <div className="flex items-center mt-5 gap-5">
          <p className="bg-[#314755]/80 rounded-lg py-3 text-[22px] px-5">
            <FaPhoneAlt />
          </p>
          <div className="text-[16px] sm:text-[18px]">
            <p>Contact Me</p>
            <p className="text-[#BBD2C5] font-semibold">+88 01972420170</p>
          </div>
        </div>

        <div className="flex items-center mt-5 gap-5">
          <p className="bg-[#314755]/80 rounded-lg py-3 text-[22px] px-5">
            <TfiEmail />
          </p>
          <div className="text-[16px] sm:text-[18px]">
            <p>Email Me</p>
            <p className="text-[#BBD2C5] font-semibold">najmujshakib025@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center mt-5 gap-5">
          <p className="bg-[#314755]/80 rounded-lg py-3 text-[22px] px-5">
            <FaLocationDot />
          </p>
          <div className="text-[16px] sm:text-[18px]">
            <p>Location</p>
            <p className="text-[#BBD2C5] font-semibold">Saver, Dhaka, Bangladesh</p>
          </div>
        </div>

      </div>

      {/* ---------------- RIGHT PART (FORM) ---------------- */}
      <div className="w-full lg:w-1/2 px-0 sm:px-5 lg:px-10 py-5">

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
          <div className="w-full">
            <p className="font-semibold">Name</p>
            <input
              className="border-2 w-full py-2 px-5 rounded-lg border-[#ee9ca7] outline-0"
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className="w-full">
            <p className="font-semibold">Email</p>
            <input
              className="border-2 w-full py-2 px-5 rounded-lg border-[#ee9ca7] outline-0"
              type="text"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="mt-5">
          <p className="font-semibold">Subject</p>
          <input
            className="border-2 w-full py-3 px-5 rounded-lg border-[#ee9ca7] outline-0"
            type="text"
            placeholder="How can I help?"
          />
        </div>

        <div className="mt-5">
          <p className="font-semibold">Message</p>
          <textarea
            className="border-2 w-full h-24 rounded-lg border-[#ee9ca7] outline-0 p-3 resize-none"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <div className="mt-10">
          <button
            className="w-full flex items-center justify-center gap-3 cursor-pointer bg-[#ee9ca7]
            py-4 sm:py-5 rounded-lg text-[18px] sm:text-[20px]"
          >
            Send Message <BsFillSendFill />
          </button>
        </div>

      </div>

    </div>

  </Container>

</div>

  )
}

export default Contact
