import uw from "../../assets/uw.png"
import Card from "../Card/Card";

function Education(){
  return (
    <div className="w-2/5">
      <Card title={"Education"}>
        <img src={uw} className="w-full p-8 object-contain" />
        <div className="px-4 pb-4">
          <h4 className="text-3xl font-semibold text-yellow-500">
            The University of Waterloo
          </h4>
          <p className="text-2xl">
            Sept 2024 - August 2029
          </p>
        </div>
        <div className="px-4 pb-4  ">
          <h5 className="text-2xl font-semibold text-yellow-500">
            Coursework
          </h5>
          <ul className="ml-5 list-disc list-outside text-base">
            <li><span className="font-semibold">MATH 135</span>: Algebra for Honours Mathematics</li>
            <li><span className="font-semibold">MATH 147</span>: Calculus 1 (Advanced Level)</li>
            <li><span className="font-semibold">CS 145</span>: Designing Functional Programs (Advanced Level)</li>
            <li><span className="font-semibold">MUSIC 140</span>: Popular Music and Culture</li>
            <li><span className="font-semibold">COMMST 223</span>: Public Speaking</li>
          </ul>
        </div> 
        <div className="px-4 py-2">
          <h5 className="text-2xl font-semibold text-yellow-500">
            Awards
          </h5>
          <ul className="ml-5 list-disc list-outside text-base">
            <li><span className="font-semibold">2000$</span> - President's Scholarship of Distinction</li>
          </ul>
        </div>
      </Card>
    </div>
    
  )
}

export default Education;