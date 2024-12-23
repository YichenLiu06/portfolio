import Navlink from "./components/Navbar/Navlink/Navlink"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import About from "./components/About/About"
import Card from "./components/Card/Card"
import Education from "./components/Education/Education"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import Carousel from "./components/Carousel/Carousel"
import ProjectCard from "./components/ProjectCard/ProjectCard"
import SpotifyWidget from "./components/SpotifyWidget/SpotifyWidget"
import Projects from "./components/Projects/Projects"
import home from "./assets/home.svg"
import code from "./assets/code.svg"
import frameworks from "./assets/frameworks.svg"
import placeholder from "./assets/placeholder.jpg"
import { languages } from "./data/data"
import { frameworksAndLibraries } from "./data/data"
import { about } from "./data/data"
import { useEffect, useRef } from "react"

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  function scrollToAbout(){
    aboutRef.current.scrollIntoView({behavior: "smooth"})
  }
  function scrollToProjects(){
    projectsRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="min-h-screen bg-slate-900 py-4 ">
      <div className=" mx-60 flex flex-col text-[--text] gap-4 my-8 font-inter">
        <Navbar scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects}/>
        <Header />
        <List icon={code} title="Languages" items={languages} />
        <List icon={frameworks} title = "Frameworks and Libraries" items = {frameworksAndLibraries} />
        <About innerRef={aboutRef} />
        <SpotifyWidget />
        <div className="flex flex-row gap-4">

          <Education />
          <WorkExperience />
        </div>
        <Projects innerRef={projectsRef} />
      </div> 
    </div>
  )
}

export default App;
