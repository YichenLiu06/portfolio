function Card({title, text, children}){
  return (
    <div className="border rounded-xl flex flex-col">
      <h3 className="font-semibold text-3xl border-b p-4">{title}</h3>
      <div className="p-4 text-xl">
        {text}
      </div>
      {children}
    </div>
  )
}

export default Card;