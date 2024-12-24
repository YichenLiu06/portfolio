import Carousel from "../Carousel/Carousel"
import Card from "../Card/Card"
import DisplayCard from "../DisplayCard/DisplayCard";
import placeholder from "../../assets/placeholder.jpg"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import python from "../../assets/python.png"
import cpp from "../../assets/c++.png"
import sql from "../../assets/sql.png"
import java from "../../assets/java.png"
import react from "../../assets/react.svg"
import express from "../../assets/express.png"
import node from "../../assets/node.png"
import tailwind from "../../assets/tailwind.svg"
import postgresql from "../../assets/postgresql.svg"

function Projects({innerRef}){
    return(
        <Card title="Projects" innerRef={innerRef}>
            <Carousel displayCount={3}>
                <DisplayCard title="Personal Website" text={"The website that you're on right now! Personal portfolio website built using React and Tailwind CSS. "} image={placeholder} icons={[html, javascript, css, react, tailwind]}/>
                <DisplayCard title="Personal Website" text={"The website that you're on right now! Personal portfolio website built using React and Tailwind CSS. "} image={placeholder} icons={[html, javascript, css, react, tailwind]}/>
                <DisplayCard title="Personal Website" text={"The website that you're on right now! Personal portfolio website built using React and Tailwind CSS. "} image={placeholder} icons={[html, javascript, css, react, tailwind]}/>
                <DisplayCard title="Personal Website" text={"The website that you're on right now! Personal portfolio website built using React and Tailwind CSS. "} image={placeholder} icons={[html, javascript, css, react, tailwind]}/>
            </Carousel>
        </Card>
    )   
}

export default Projects;