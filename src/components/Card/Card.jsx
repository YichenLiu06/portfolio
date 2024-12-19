function Card({title, text}){
  return (
    <section>
      <div className="p-4 border rounded-xl text-2xl">
        <h3 className="font-bold underline">{title}</h3> {text}
      </div>
    </section>
  )
}

export default Card;