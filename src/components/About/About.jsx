import Card from "../Card/Card";
import { about } from "../../data/data";

function About({innerRef}){
    return(
        <Card title="About" innerRef={innerRef}>
            {about}
        </Card>
    )
}

export default About;