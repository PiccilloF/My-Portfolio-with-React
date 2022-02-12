import Header from "../Header";
import Presentation from "./Presentation";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "../Footer";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <Presentation/>
            <Skills  />
            <Projects />
            <Footer/>
        </div>
    )
} 