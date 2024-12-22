function Chip({icon, text}){
  return (
    <div className="rounded-xl p-3 border-[--secondary] border flex flex-row gap-4 items-center shrink-0" >
      <img src={icon} className="object-contain w-8 h-8"/>
      <p className="text-xl ">{text}</p>
    </div>
  )
}

export default Chip;