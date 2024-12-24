import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import DisplayCard from "../DisplayCard/DisplayCard";
import hire from "../../assets/hire.svg"
import placeholder from "../../assets/placeholder.jpg"

function WorkExperience({items}){
  return (
      <Card title="Work Experience" className="w-2/3">
        <a href="mailto:yichen.liu@hotmail.com"> 
          <div className="flex flex-row gap-4 p-2 border rounded-xl text-2xl items-center justify-center">
            <img src={hire} className="size-10" />
            {"Looking for Internships for Spring 2025. Click here to Hire Me!"}
          </div>
        </a>
        <Carousel displayCount={2} horizontal={true} className="grow h-full">
          <DisplayCard title="Personal Website" text={"The website that you're on right now! Personal portfolio website built using React and Tailwind CSS. "} image={placeholder} displayHeight={80} />
          <DisplayCard title="Personal Website" text={"The website that you're on right now! Personal portfolio website built using React and Tailwind CSS. "} image={placeholder} displayHeight={80}/>
          <DisplayCard title="Personal Website" text={"The website that you're on right now! Personal portfolio website built using React and Tailwind CSS. "} image={placeholder} displayHeight={80} />
        </Carousel>
        
      </Card>    
  )
}

export default WorkExperience;