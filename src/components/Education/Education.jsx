import uw from "../../assets/uw.png"

function Education(){
  return (
    <div className="border rounded-xl w-2/5 flex flex-col">
      <h3 className="font-semibold text-3xl border-b p-4">Education</h3>
      <img src={uw} className="w-full p-11" />
      <div className="px-4 pb-4">
        <h4 className="text-3xl font-semibold">
          The University of Waterloo
        </h4>
        <p className="text-2xl">
          Sept 2024 - August 2029
        </p>
      </div>
      <div className="px-4 pb-4  ">
        <h5 className="text-2xl font-semibold">
          Coursework
        </h5>
        <ul className="list-disc list-inside text-xl">
          <li>hello</li>
        </ul>
      </div> 
      <div className="px-4 py-2">
        <h5 className="text-2xl font-semibold">
          Awards
        </h5>
      </div>
    </div>
  )
}

export default Education;