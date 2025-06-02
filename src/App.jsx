import "./App.css";
import HeroSection from "./components/HeroSection";
import MScProgrammes from "./components/MScProgrammes";
import Navbar from "./components/navbar";
import Courses from "@/components/courses";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Courses />
      <MScProgrammes />
    </div>
  );
}

export default App;
