import { useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import DisplayCard from "../DisplayCard/DisplayCard";
import hire from "../../assets/hire.svg"
import placeholder from "../../assets/placeholder.jpg"
import wchscsclub from "../../assets/wchscsclub.png"
import inthinkingglc from "../../assets/inthinkingglc.png"
import uwvac from "../../assets/uwvac.jpg"

function WorkExperience({items}){
  const [hover, setHover] = useState(false)
  const hoverStyle = hover ? "bg-slate-700" : "bg-slate-900";
  return (
      <Card title="Work Experience" className="w-2/3">
        <a href="mailto:yichen.liu@hotmail.com"> 
          <div className={"flex flex-row gap-4 p-2 border rounded-xl text-2xl items-center justify-center transition-all duration-300 " + hoverStyle} onPointerOver={(event) => { setHover(true) }} onPointerOut={(event) => { setHover(false) }}>
            <img src={hire} className="size-10" />
            {"Looking for Internships for Spring 2025. Click here to Hire Me!"}
          </div>
        </a>
        <Carousel displayCount={2} horizontal={true} className="grow h-full">
          <DisplayCard title="CS Club Executive" image={wchscsclub} displayHeight={80}>
            <ul  className="ml-5 list-disc list-outside text-base marker:text-violet-400">
              <h2 className="text-lg text-slate-400">Western Canada High School</h2>
              <li>Organized events in collaboration with several other clubs and created basic computer science problems to raise
              interest</li>
              <li>Hosted weekly lessons in competitive programming in C++ to 30+ students using Codeforces Polygon to write
              original problems to test competitive programming fundamentals</li>
              <li> Hosted school-wide events where students were invited to create original projects using knowledge taught during
              club lessons</li>
            </ul>
          </DisplayCard>
          <DisplayCard title="Competitive Programming Tutor" image={inthinkingglc} displayHeight={80}>
            <ul  className="ml-5 list-disc list-outside text-base marker:text-violet-400">
              <h2 className="text-lg text-slate-400">Inthinking Youth Club</h2>
              <li>Hosted weekly lessons in C++ on common competitive programming data structures and algorithms to 50+ students </li>
              <li>Compiled a comprehensive competitive programming curriculum, including visual aids and problemsets with solutions</li>
            </ul>
          </DisplayCard>
          <DisplayCard title="Visual Arts Club Executive" image={uwvac} displayHeight={80}>
            <ul  className="ml-5 list-disc list-outside text-base marker:text-violet-400">
              <h2 className="text-lg text-slate-400">The University of Waterloo</h2>
              <li>Coming Soon!</li>
            </ul>
          </DisplayCard>
        </Carousel>
        
      </Card>    
  )
}

export default WorkExperience;