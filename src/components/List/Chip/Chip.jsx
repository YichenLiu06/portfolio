function Chip({icon, text, distance}){
  return (
    <div className="rounded-xl p-2 border-[--secondary] border flex flex-row gap-2 items-center shrink-0" >
      <img src={icon} className="object-contain w-7 h-7"/>
      <p className="text-lg ">{text}</p>
    </div>
  )
}

export default Chip;