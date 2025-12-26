import { HStack, ProgressCircle } from "rsuite";
import Container from "../container/Container";
const Skill = () => {
  return (
    <div className="bg-black/0 h-screen py-40 ">
      <Container>
        <div className=" py-20">
          <div className="text-white text-center justify-center">
            <h1 className="text-[50px] font-bold ">Technical Mastery</h1>
            <p className="text-[20px] font-semibold">
              A diverse toolkit built on years of problem-solving and
              architectural design.
            </p>
          </div>

          <div className="text-white">
            <HStack className="flex justify-center mt-25" spacing={100}>
              <p className="text-white text-center items-center">
                {" "}
                <span>React.js</span>{" "}
                <ProgressCircle percent={90} strokeColor="#ffc107" w={100} />
              </p>
              <p className="text-white text-center items-center">
                <span>CSS</span>{" "}
                <ProgressCircle percent={90} strokeColor="#4caf50" w={100} />
              </p>
              <p className="text-white text-center items-center">
                <span>Tailwind CSS</span>{" "}
                <ProgressCircle percent={80} strokeColor="#8B00E8" w={100} />
              </p>

              <p className="text-white text-center items-center">
                <span>HTML</span>{" "}
                <ProgressCircle percent={95} strokeColor="#CA194D" w={100} />
              </p>
            </HStack>
          </div>

          <div className="text-white">
            <HStack className="flex justify-center  mt-25" spacing={100}>
              <p className="text-white text-center items-center">
                {" "}
                <span>Javascript</span>{" "}
                <ProgressCircle percent={70} strokeColor="#E60CE6" w={100} />
              </p>
              <p className="text-white text-center ">
                <span>VS Code</span>{" "}
                <ProgressCircle percent={70} strokeColor="#FF0000" w={100} />
              </p>
              <p className="text-white text-center items-center">
                <span>Firebase</span>{" "}
                <ProgressCircle percent={80} strokeColor="#FCB045" w={100} />
              </p>

              <p className="text-white text-center items-center">
                <span>System Design</span>{" "}
                <ProgressCircle percent={90} strokeColor="#00FFC3" w={100} />
              </p>
            </HStack>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
