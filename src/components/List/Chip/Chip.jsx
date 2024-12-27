import { useState } from "react";

function Chip({ icon, text, distance }) {
  const [hover, setHover] = useState(false)
  const hoverStyle = hover ? "bg-slate-700" : "bg-slate-900";
  return (
    <div className={"rounded-xl p-2 border flex flex-row gap-2 items-center shrink-0 transition-all duration-300 ease-in-out " + hoverStyle} onPointerOver={(event) => { setHover(true) }} onPointerOut={(event) => { setHover(false) }} >
      <img src={icon} className="object-contain w-7 h-7" />
      <p className="text-lg ">{text}</p>
    </div>
  )
}

export default Chip;