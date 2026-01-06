import { useState } from "react";

function DisplayCard({title, subtitle, children, link="", hero, primaryIcon, secondaryIcons=[], displayHeight = 144, className = ""}){
  const [hover, setHover] = useState(false)
  const hoverStyle = hover ? "bg-slate-800" : "bg-slate-900";

  return (
    <a href={link} className={"block flex flex-col overflow-hidden rounded-xl border h-full transition-all duration-300 ease-in-out " + className + hoverStyle} onPointerOver={(event) => { setHover(true) }} onPointerOut={(event) => { setHover(false) }}>
      <img src = {hero} style={{height:`${displayHeight}px`}} className="object-cover opacity-100"/>
      <div className="p-4 flex flex-col grow gap-4">
        <div className="flex flex-row gap-4 items-center">
          {primaryIcon ? 
              <img src={primaryIcon} className="size-4 rounded-full w-10 h-10 border"/>
            : false 
          }
          <div>
            <h3 className="font-semibold text-2xl ">{title}</h3>
            <h2 className="text-lg text-slate-400">{subtitle}</h2>
          </div>
        </div>
        <hr className="bg-gray-400 border-gray-500"></hr>
        <div className="px-4 rounded-b-xl grow">
          {children}
        </div>
        <div className="flex flex-row gap-2">
            {secondaryIcons.map((icon)=>(
              <div className="border rounded-full p-2">
                <img src={icon} className="size-4"/>
              </div>
            ))}
        </div>
      </div>
    </a>
  )
    
}

export default DisplayCard;