import Navlink from "./components/Navbar/Navlink/Navlink"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import home from "./assets/home.svg"
import code from "./assets/code.svg"
import { languages } from "./data/data"

function App() {

  return (
    <div className="bg-[--primary] mx-80 flex flex-col text-[--text] flex flex-col gap-8 my-8">
        <Navbar />
        <Header />
        <List icon={code} title="Languages" items={languages} />
    </div> 
  )
}

export default App;
