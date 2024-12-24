function DisplayCard({title, text, link="", image, icons=[], displayHeight = 144, className = ""}){
  return (
    <a href={link}>
      <div className={"flex flex-col overflow-hidden rounded-xl h-full border " + className}>
        <img src = {image} style={{height:`${displayHeight}px`}} className="object-cover opacity-70"/>
        <h3 className="font-semibold text-3xl p-4 ">{title}</h3>
        <div className="px-4 pb-4 rounded-b-xl grow">
          {text}
          <div className="flex flex-row gap-2 mt-4">
            {icons.map((icon)=>(
              <div className="border rounded-full p-2">
                <img src={icon} className="size-4"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
    
}

export default DisplayCard;