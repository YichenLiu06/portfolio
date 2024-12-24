import Navlink from "./components/Navbar/Navlink/Navlink"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import About from "./components/About/About"
import Card from "./components/Card/Card"
import Education from "./components/Education/Education"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import Carousel from "./components/Carousel/Carousel"
import ProjectCard from "./components/DisplayCard/DisplayCard"
import SpotifyWidget from "./components/SpotifyWidget/SpotifyWidget"
import Projects from "./components/Projects/Projects"
import TitleText from "./components/TitleText/TitleText"
import home from "./assets/home.svg"
import code from "./assets/code.svg"
import frameworks from "./assets/frameworks.svg"
import placeholder from "./assets/placeholder.jpg"
import { languages } from "./data/data"
import { frameworksAndLibraries } from "./data/data"
import { about } from "./data/data"
import { useEffect, useRef } from "react"
import Skills from "./components/Skills/Skills"

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  function scrollToAbout(){
    aboutRef.current.scrollIntoView({block: "center", behavior: "smooth"})
  }
  function scrollToProjects(){
    projectsRef.current.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div className="min-h-screen bg-slate-900 font-darker-grotesque px-8">
      <div className=" flex flex-col text-[--text] gap-4 px-8 font-semibold items-stretch border-x">
        <Navbar scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects}/>
        <About innerRef={aboutRef} />
        <Skills />
        <TitleText text="Background"  />
        
        <div className="flex flex-row gap-4">
          <Education />
          <WorkExperience />
        </div>
        <TitleText text="Projects" />
        <Projects innerRef={projectsRef} />
      </div> 
    </div>
  )
}

export default App;
