import hire from "../../assets/hire.svg"

function WorkExperience({items}){
  return (
    <div className="border rounded-xl w-3/5 flex flex-col">
      <h3 className="font-semibold text-3xl border-b p-4">Work Experience</h3>
      <div className="flex flex-row gap-4 p-4 border m-4 rounded-xl text-2xl items-center justify-center">
        <img src={hire} className="size-10" />
        {"Looking for Internships for Spring 2025. Click here to Hire Me!"}
      </div>
    </div>
  )
}

export default WorkExperience;