import avatar from "../../assets/avatar.jpg"

function Header(){
  return (
    <div className="flex flex-row gap-10 items-end">
      <img src={avatar} className="w-52 h-52 rounded-xl"/>
      <h1 className="font-darker-grotesque font-bold text-8xl whitespace-pre-line">
       HELLO, {"\n"}
       MY NAME IS YICHEN LIU
      </h1>
    </div>
  )
}

export default Header;