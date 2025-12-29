import Container from "../container/Container";
import { Timeline, Text } from "rsuite";
import "rsuite/Timeline/styles/index.css";

const Experience = () => {
  return (
    <div className="py-16  min-h-screen md:pt-50 pt-24">
      <Container>
        {/* Section Title */}
        <div className="text-white text-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">Career Path</h1>
          <p className="font-semibold text-lime-200 text-base sm:text-lg md:text-xl mt-2">
            My professional journey and key milestones in the Web industry.
          </p>
        </div>

        {/* First Experience */}
        <div className="text-center md:mx-0 mx-auto py-5 mt-5 max-w-2xl">
          <h2 className="text-[#4B79A1] text-xl sm:text-2xl md:text-3xl font-bold">
            MERN Stack Developer Upcoming
            <span className="px-2 text-xs sm:text-sm md:text-base text-[#00FFC3]">(CIT)</span>
          </h2>

          <Timeline className="custom-timeline mt-6 font-semibold text-sm sm:text-base md:text-lg text-white">
            <Timeline.Item>
              <Text>Your courier has arrived and the signer is the front desk</Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text>Reduced frontend bundle sizes by 40% through advanced tree-shaking and lazy loading.</Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text>Mentored a team of 10 junior and mid-level developers.</Text>
            </Timeline.Item>
          </Timeline>
        </div>

        {/* Second Experience */}
        <div className="text-center mx-auto py-5 md: mt-0 max-w-2xl">
          <h2 className="text-[#4B79A1] text-xl sm:text-2xl md:text-3xl font-bold">
            Front End Developer
            <span className="px-2 text-xs sm:text-sm md:text-base text-[#00FFC3]">(InnoSystems)</span>
          </h2>

          <Timeline className="custom-timeline mt-6 font-semibold text-sm sm:text-base md:text-lg text-white">
            <Timeline.Item>
              <Text>Developed and maintained highly scalable e-commerce solutions.</Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text>Implemented real-time chat features using WebSockets and Socket.io.</Text>
            </Timeline.Item>
            <Timeline.Item>
              <Text>Optimized database queries, resulting in 30% faster load times.</Text>
            </Timeline.Item>
          </Timeline>
        </div>

        {/* Timeline Styles */}
        <style>
          {`
            .custom-timeline {
              margin-left: 0px;
            }
            .rs-timeline-item-tail {
              width: 2px;
              background-color: #FD1D1D;
            }
            .rs-timeline-item-custom-dot .rs-icon {
              position: absolute;
              background: #FD1D1D;
              top: 0;
              left: -2px;
              border: 2px solid #ddd;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              font-size: 14px;
              color: #FD1D1D;
              margin-left: -8px;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 4px;
            }
            .rs-timeline-item {
              margin-bottom: 1px;
            }
          `}
        </style>
      </Container>
    </div>
  );
};

export default Experience;
