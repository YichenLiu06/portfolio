function Chip({icon, text}){
  return (
    <div className="rounded-xl p-4 border-[--secondary] border flex flex-row gap-4 items-center shrink-0" >
      <img src={icon} className="object-contain w-10 h-10"/>
      <p className="text-2xl ">{text}</p>
    </div>
  )
}

export default Chip;