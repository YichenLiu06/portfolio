function ProjectCard({title, text, image}){
  return (
    <div className="flex flex-col overflow-hidden rounded-xl h-full border">
      <img src = {image} className="h-36 object-cover opacity-70"/>
      <h3 className="font-semibold text-3xl p-4 ">{title}</h3>
      <div className="px-4 pb-4 rounded-b-xl grow">
        {text}
      </div>
    </div>
  )
}

export default ProjectCard; 