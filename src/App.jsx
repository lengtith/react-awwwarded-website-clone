import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";
import LocomotiveScroll from 'locomotive-scroll';


export default function App() {
  const scroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen font-FoundersGrotesk font-bold">
      <Navbar />
      <LandingPage />
      <Marque />
    </div>
  )
}