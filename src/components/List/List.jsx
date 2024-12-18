import Chip from "./Chip/Chip";

function List({icon, title, items}){
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-row gap-2">
        <img src={icon} className="w-7 h-7 object-contain"/>
        <h2 className="text-2xl font-semibold">
          {title}
        </h2>
      </div>
      <div className="flex flex-row gap-4">
        {items.map((item)=>{
          return <Chip icon={item.icon} text={item.text}/>
        })}
      </div>
    </div>
  );
}

export default List;