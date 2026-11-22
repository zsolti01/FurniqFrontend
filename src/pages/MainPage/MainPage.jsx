import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

export default function MainPage() {
  return (
    <div className="mainPage">
        <Navbar />

        <div className="hero">
            <Hero />
        </div>
    </div>
  )
}
