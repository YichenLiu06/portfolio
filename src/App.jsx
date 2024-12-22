import Navlink from "./components/Navbar/Navlink/Navlink"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Card from "./components/Card/Card"
import Education from "./components/Education/Education"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import Carousel from "./components/Carousel/Carousel"
import ProjectCard from "./components/ProjectCard/ProjectCard"
import NowPlaying from "./components/SpotifyWidget/NowPlaying"
import SpotifyWidget from "./components/SpotifyWidget/SpotifyWidget"
import home from "./assets/home.svg"
import code from "./assets/code.svg"
import placeholder from "./assets/placeholder.jpg"
import { languages } from "./data/data"
import { about } from "./data/data"

function App() {

  return (
    <>
    
    <div className="bg-[--primary] mx-80 flex flex-col text-[--text] gap-4 my-8 font-inter">
        <Navbar />
        <Header />
        <List icon={code} title="Languages" items={languages} />
        <Card title="About" text={about} />
        <SpotifyWidget />
        <div className="flex flex-row gap-4">

          <Education />
          <WorkExperience />
        </div>
        <Carousel>
          <ProjectCard title="Personal Website" text={"Hi, this is my personal project! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor quam, condimentum vitae lorem vitae, suscipit aliquam felis. Morbi ac quam sollicitudin, hendrerit ipsum sit amet, aliquam leo."} image={placeholder}/>
          <ProjectCard title="Personal Website" text={"Hi, this is my personal project!"} image={placeholder}/>
          <ProjectCard title="Personal Website" text={"Hi, this is my personal project!"} image={placeholder}/>
          <ProjectCard title="Personal Website" text={"Hi, this is my personal project!"} image={placeholder}/>
          <ProjectCard title="Personal Website" text={"Hi, this is my personal project!"} image={placeholder}/>
        </Carousel>
        
        
    </div> 
    </>
  )
}

export default App;
