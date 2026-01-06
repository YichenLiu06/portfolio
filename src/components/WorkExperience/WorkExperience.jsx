import { useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import DisplayCard from "../DisplayCard/DisplayCard";
import hire from "../../assets/hire.svg"
import placeholder from "../../assets/placeholder.jpg"
import wchscsclub from "../../assets/wchscsclub.png"
import micromarthero from "../../assets/micromarthero.png"
import micromart from "../../assets/micromart.jpg"
import wato from "../../assets/wato.png"
import watohero from "../../assets/watohero.png"
import vip from "../../assets/vip.jpg"
import viphero from "../../assets/viphero.png"
import geesehacks from "../../assets/geesehacks.jpg"
import geesehackshero from "../../assets/geesehackshero.jpg"
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
          <DisplayCard title="Software Engineering Intern" subtitle="Micromart" hero={micromarthero} primaryIcon={micromart} displayHeight={80}>
            <ul  className="ml-5 list-disc list-outside text-base marker:text-violet-400">
              <li>Developed end-to-end tests using <b>Cypress</b>, improving test reliability and coverage for a <b>React-based</b> web platform.</li>
              <li>Optimized CI/CD performance in CircleCI with caching, reducing build and test times by up to <b>40%</b>.</li>
              <li>Implemented a fraud prevention system using <b>Stripe</b> to close a payment loophole with removed payment methods</li>
            </ul>
          </DisplayCard>
          <DisplayCard title="Software Developer" subtitle="WATONOMOUS" hero={watohero} primaryIcon={wato} displayHeight={80}>
            <ul  className="ml-5 list-disc list-outside text-base marker:text-violet-400">
              <li>Developed ROS-bridge websocket interface between VR and ROS, supporting low-latency teleoperation</li>
              <li>Implemented a <b>pairing token system</b> to authenticate websocket connection requests</li>
              <li>Designed a system to map <b>VR-captured</b> hand data into corresponding robot <b>joint positions</b> for tele-operation</li>
            </ul>
          </DisplayCard>
          <DisplayCard title="Undergraduate Research Assistant" subtitle="Vision and Image Processing Lab" hero={viphero} primaryIcon={vip} displayHeight={80}>
            <ul  className="ml-5 list-disc list-outside text-base marker:text-violet-400">
              <li>projected LiDAR change maps into 2D space to change masks for supervising <b>3D Gaussian Splatting</b> updates</li>
              <li>Implemented a 2D mask majority-vote algorithm for change classification of 3D Gaussian Splatting scenes</li>
              <li>Implemented approximate-nearest-neighbour with distance-threshold filtering to isolate object-level changes between LiDAR point clouds</li>
            </ul>
          </DisplayCard>
          <DisplayCard title="Hackathon Organizer (Tech)" subtitle="GeeseHacks 2026" hero={geesehackshero} primaryIcon={geesehacks} displayHeight={80}>
            <ul  className="ml-5 list-disc list-outside text-base marker:text-violet-400">
              <li>Developed a full-stack hackathon portal with an integrated event schedule and participant dashboard in <b>Next.js</b></li>
              <li>Designed and implemented a scalable database schema to manage participant information and application data</li>
              <li>Developed Next.js API endpoints to update and manage applicant data, utilizing <b>Zod</b> for schema validation and <b>pg-promise</b> for database queries</li>
            </ul>
          </DisplayCard>
        </Carousel>
        
      </Card>    
  )
}

export default WorkExperience;