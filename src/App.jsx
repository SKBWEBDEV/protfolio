import Navber from "./components/navber/Navber";
import Banner from "./components/banner/Banner";
import Skill from "./components/skills/Skill";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"; // react-router-dom ব্যবহার করো
import code from "../src/assets/code.mp4";

// একটি layout component বানাও যা সব পেজে Navbar দেখাবে
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
      { path: "", element: <Banner /> }, // default route
    ],
  },
]);

function App() {
  return (
   <div className="relative w-full h-screen">
      
      <video
        src={code}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      />
      
      <div className="relative z-10">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

