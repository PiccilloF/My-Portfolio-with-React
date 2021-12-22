import Header from "../Header";
import Presentation from "./Presentation";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "../Footer";

export default function Home() {
    return (
        <>
            <Header />
            <div className="main">
                <Presentation/>
                <Skills  />
                <Projects />
            </div>
            <Footer/>
        </>
    )
} 