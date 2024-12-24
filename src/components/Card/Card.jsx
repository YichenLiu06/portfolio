function Card({ title, text, innerRef, className, children }) {
  return (
    <div className={" border rounded-xl flex flex-col " + className} ref={innerRef}>
      <h3 className="font-semibold text-3xl border-b px-4 py-2">{title}</h3>
      <div className="p-4 text-base whitespace-pre-line flex flex-col gap-4 grow">
        {children}
      </div>
    </div>
  )
}

export default Card;