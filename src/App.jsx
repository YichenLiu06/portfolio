import Navlink from "./components/Navbar/Navlink/Navlink"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Card from "./components/Card/Card"
import Education from "./components/Education/Education"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import home from "./assets/home.svg"
import code from "./assets/code.svg"
import { languages } from "./data/data"
import { about } from "./data/data"

function App() {

  return (
    <div className="bg-[--primary] mx-80 flex flex-col text-[--text] gap-4 my-8 font-inter">
        <Navbar />
        <Header />
        <List icon={code} title="Languages" items={languages} />
        <Card title="About" text={about} />
        <div className="flex flex-row gap-4">
          <Education />
          <WorkExperience />
        </div>
        
    </div> 
  )
}

export default App;
