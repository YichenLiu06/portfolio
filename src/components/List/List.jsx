import Chip from "./Chip/Chip";

function List({icon, title, items}){
  return (
    <div className="flex flex-col gap-4 border rounded-xl p-4">
      <div className="flex flex-row gap-2 items-center max-w-full">
        <img src={icon} className="w-7 h-7 object-contain"/>
        <h2 className="text-3xl font-semibold">
          {title}
        </h2>
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        {items.map((item)=>{
          return <Chip icon={item.icon} text={item.text}/>
        })}
      </div>
    </div>
  );
}

export default List;