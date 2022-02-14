import Header from "../Header";
import Presentation from "./Presentation";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "../Footer";

/*
    Création d'un fichier Json pour les données à dynamiser 
    plus importation
*/

import datas from "../../data.json";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <Presentation/>
            <Skills
               props = {datas}
            />
            <Projects />
            <Footer/>
        </div>
    )
} 