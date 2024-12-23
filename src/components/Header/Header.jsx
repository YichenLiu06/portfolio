import avatar from "../../assets/avatar.jpg"

function Header(){
  return (
    <div className="flex flex-row gap-4 items-end border rounded-xl p-4 h-52">
      <img src={avatar} className="h-full object-contain rounded-xl"/>
      <h1 className="font-darker-grotesque font-bold text-8xl whitespace-pre-line">
       HELLO, {"\n"}
       MY NAME IS YICHEN LIU
      </h1>
    </div>
  )
}

export default Header;