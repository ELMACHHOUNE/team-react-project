import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import Courses from "@/components/courses";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Courses />
    </div>
  );
}

export default App;
