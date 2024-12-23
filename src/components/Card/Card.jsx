function Card({title, text, innerRef, children}){
  return (
    <div className="border rounded-xl flex flex-col" ref={innerRef}>
      <h3 className="font-semibold text-3xl border-b p-4">{title}</h3>
      <div className="p-4 text-xl">
        {children}
      </div>
    </div>
  )
}

export default Card;