import Card from "../Card/Card";
import hire from "../../assets/hire.svg"

function WorkExperience({items}){
  return (
      <Card title="Work Experience">
        <a href="mailto:yichen.liu@hotmail.com"> 
          <div className="flex flex-row gap-4 p-4 border m-4 rounded-xl text-2xl items-center justify-center">
            <img src={hire} className="size-10" />
            {"Looking for Internships for Spring 2025. Click here to Hire Me!"}
          </div>
        </a>
      </Card>    
  )
}

export default WorkExperience;