import { useState } from "react";

function DisplayCard({title, children, link="", image, icons=[], displayHeight = 144, className = ""}){
  const [hover, setHover] = useState(false)
  const hoverStyle = hover ? "bg-slate-800" : "bg-slate-900";

  return (
    <a href={link} className={"block flex flex-col overflow-hidden rounded-xl border h-full transition-all duration-300 ease-in-out " + className + hoverStyle} onPointerOver={(event) => { setHover(true) }} onPointerOut={(event) => { setHover(false) }}>
      <img src = {image} style={{height:`${displayHeight}px`}} className="object-cover opacity-100"/>
      <div className="p-4 flex flex-col grow">
        <h3 className="font-semibold text-3xl ">{title}</h3>
        <div className="px-4 pb-4 rounded-b-xl grow">
          {children}
        </div>
        <div className="flex flex-row gap-2">
            {icons.map((icon)=>(
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