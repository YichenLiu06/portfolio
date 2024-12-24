import List from "../List/List";
import Card from "../Card/Card";
import TitleText from "../TitleText/TitleText";
import { languages } from "../../data/data";
import { frameworksAndLibraries } from "../../data/data";
import code from "../../assets/code.svg"
import frameworks from "../../assets/frameworks.svg"

function Skills(){
    return (
        <>
            <TitleText text="Skills"/>
            <Card title="Technologies">
                <List icon={code} title="Languages" items={languages} />
                <List icon={frameworks} title = "Frameworks and Libraries" items = {frameworksAndLibraries} />
            </Card>
        </>
    )
}

export default Skills;