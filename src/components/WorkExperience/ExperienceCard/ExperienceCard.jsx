import { useState } from "react"
import DisplayCard from "../../DisplayCard/DisplayCard"
import placeholder from "../../../assets/placeholder.jpg"

function ExperienceCard({title, text, image, className=""}){
    const [hover, setHover] = useState(false)
    return(
        <div 
            className="overflow-hidden transition-all duration-500 ease-in-out" 
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
            style = {{height: hover? "80%" : "144px", width: hover? "80%" : "144px"}}
        >
            <div className={"flex flex-col overflow-hidden rounded-xl h-full border " + className}>
                <img src = {image}  className="object-cover opacity-70 h-36"/>
                <h3 className="font-semibold text-3xl py-2 px-4 ">{title}</h3>
                <div className="px-4 pb-4 rounded-b-xl grow">
                {text}
                </div>
            </div>
        </div>
    )
    
}

export default ExperienceCard