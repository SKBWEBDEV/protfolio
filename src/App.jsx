import Navber from "./components/navber/Navber";
import Banner from "./components/banner/Banner";
import Skill from "./components/skills/Skill";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"; 
import code from "../src/assets/code.mp4";
import Project from "./components/project/Project";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";


function Layout() {
  return (
    <div>
      <Navber />
      <Outlet /> 
    </div>
  );
}

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "banner", element: <Banner /> },
      { path: "skill", element: <Skill /> },
      { path: "project", element: <Project /> },
      { path: "experience", element: <Experience /> },
      { path: "contact", element: <Contact /> },
      { path: "", element: <Banner /> }, // default route
    ],
  },
]);

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      
      {/* Background video */}
      <video
        src={code}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App;

