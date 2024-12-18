import Navlink from "./components/Navbar/Navlink/Navlink"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import home from "./assets/home.svg"

function App() {

  return (
    <div className="bg-slate-700 mx-80 flex flex-col divide-y-4 text-[--text]">
        <Navbar />
        <Header />
    </div> 
  )
}

export default App
