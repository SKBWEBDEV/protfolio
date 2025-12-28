import Container from "../container/Container";

// import Icon from '@rsuite/icons/Icon';
import { Timeline, Text } from "rsuite";
// import { FaPlane, FaTruck, FaUser, FaCheck, FaCreditCard  } from 'react-icons/fa';
import "rsuite/Timeline/styles/index.css";

const Experience = () => {
  return (
    <div className="py-40 bg-black/50 h-screen">
      <Container>
        <div className="text-white text-center">
          <h1 className="font-bold text-[50px]">Career Path</h1>
          <p className="font-semibold text-lime-200 text-[30px]">
            My professional journey and key milestones in the Web industry.
          </p>
        </div>




        <div className=" mt-12">


          <div className="text-center py-0   w-fit">
            <h2 className="text-[#4B79A1] text-[30px] font-bold">MERN Stack Developer Upcoming 
              <span className="px-5 text-[18px] text-[#00FFC3]">(CIT)</span></h2>
            <Timeline className="custom-timeline text-white mt-10 font-semibold text-[18px]">
              <Timeline.Item>
                <Text>
                  Your courier has arrived and the signer is the front desk
                </Text>
              </Timeline.Item>

              <Timeline.Item>
                <Text className="">
                  Reduced frontend bundle sizes by 40% through advanced
                  tree-shaking and lazy loading.
                </Text>
              </Timeline.Item>

              <Timeline.Item>
                <Text>
                  Mentored a team of 10 junior and mid-level developers.
                </Text>
              </Timeline.Item>
            </Timeline>

            <style>
              {`
.custom-timeline {
  margin-left: 20px;

  /* Dot styling */
  .rs-timeline-item-custom-dot .rs-icon {
    position: absolute;
    background: #FD1D1D;
    top: 0;
    left: -2px;
    border: 2px solid #ddd;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 18px;
    color: #FD1D1D;
    margin-left: -10px;
    justify-content: center;
    padding: 8px;
  }

  /* Content styling */
  .rs-timeline-item-content {
    margin-left: 0px;
  }

  /* Item spacing */
  .rs-timeline-item {
    margin-bottom: 10px; /* প্রতিটি item এর মধ্যে vertical gap */
  }

  /* Vertical line lombo করা */
  .rs-timeline-item-tail {
    width: 2px;          
    background-color: #FD1D1D; 
    top: px;           
    height: calc(100% + 25px); 
  }
}
`}
</style>
          </div>
 {/* ========================================first part end================================== */}
          <div className="text-center mx-auto py-5  mt-10  w-fit">
            <h2 className="text-[#4B79A1] text-[30px] font-bold">Front End Developer 
              <span className="px-5 text-[18px] text-[#00FFC3]">(InnoSystems)</span></h2>
            <Timeline className="custom-timeline text-white mt-10 font-semibold text-[18px]">
              <Timeline.Item>
                <Text>
                  Developed and maintained highly scalable e-commerce solutions.
                </Text>
              </Timeline.Item>

              <Timeline.Item>
                <Text className="">
                  Implemented real-time chat features using WebSockets and Socket.io.
                  tree-shaking and lazy loading.
                </Text>
              </Timeline.Item>

              <Timeline.Item>
                <Text>
                  Optimized database queries, resulting in 30% faster load times.
                </Text>
              </Timeline.Item>
            </Timeline>

            <style>
              {`
.custom-timeline {
  margin-left: 20px;

  /* Dot styling */
  .rs-timeline-item-custom-dot .rs-icon {
    position: absolute;
    background: #FD1D1D;
    top: 0;
    left: -2px;
    border: 2px solid #ddd;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 18px;
    color: #FD1D1D;
    margin-left: -10px;
    justify-content: center;
    padding: 8px;
  }

  /* Content styling */
  .rs-timeline-item-content {
    margin-left: 0px;
  }

  /* Item spacing */
  .rs-timeline-item {
    margin-bottom: 10px; /* প্রতিটি item এর মধ্যে vertical gap */
  }

  /* Vertical line lombo করা */
  .rs-timeline-item-tail {
    width: 2px;          
    background-color: #FD1D1D; 
    top: px;           
    height: calc(100% + 25px); 
  }
}
`}
</style>
          </div>


        
        
          
        </div>
      </Container>
    </div>
  );
};

export default Experience;
