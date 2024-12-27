import { useState } from "react";

function Navlink({ icon, url, text, handleClick}) {
  const [hover, setHover] = useState(false)
  const hoverStyle = hover ? "bg-slate-700" : "bg-slate-900";

  return (
    <button onClick={handleClick}>
      <div className={"flex flex-row text-[--text] text-xl font-semibold gap-2 p-2 transition-all duration-300 " + hoverStyle} onPointerOver={(event) => { setHover(true) }} onPointerOut={(event) => { setHover(false) }}>
        <img src={icon} />
        <div>{text}</div>
      </div>
    </button>
  );
}

export default Navlink;
