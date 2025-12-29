import { ProgressCircle } from "rsuite";
import Container from "../container/Container";

const Skill = () => {
  return (
    <div className=" py-16 h-screen pt-25 md:pt-70">
      <Container>
        {/* Heading */}
        <div className="text-white text-center mb-10">
          <h1 className="md:text-5xl text-2xl font-bold mb-2">Technical Mastery</h1>
          <p className=" md:font-semibold md:text-2xl">
            A diverse toolkit built on years of problem-solving and architectural design.
          </p>
        </div>

        {/* Skills Grid: 2 per row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 justify-items-center">
          {/* Skill Item */}
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle percent={90} strokeColor="#ffc107" w={70} className="text-white "/>
            <span className="text-[#ffc107] font-semibold text-sm sm:text-base">React.js</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle percent={90} strokeColor="#4caf50" w={70} className="text-white "/>
            <span className="text-[#4caf50] font-semibold text-sm sm:text-base">CSS</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle percent={80} strokeColor="#8B00E8" w={70} className="text-white "/>
            <span className="text-[#8B00E8] font-semibold text-sm sm:text-base">Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle percent={95} strokeColor="#CA194D" w={70} className="text-white "/>
            <span className="text-[#CA194D] font-semibold text-sm sm:text-base">HTML</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle percent={70} strokeColor="#E60CE6" w={70} className="text-white "/>
            <span className="text-[#E60CE6] font-semibold text-sm sm:text-base">Javascript</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle percent={70} strokeColor="#FF0000" w={70} className="text-white "/>
            <span className="text-[#FF0000] font-semibold text-sm sm:text-base">VS Code</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle percent={80} strokeColor="#FCB045" w={70} className="text-white "/>
            <span className="text-[#FCB045] font-semibold text-sm sm:text-base">Firebase</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle percent={90} strokeColor="#00FFC3" w={70} className="text-white "/>
            <span className="text-[#00FFC3] font-semibold text-sm sm:text-base">System Design</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
