import Carousel from "../Carousel/Carousel"
import Card from "../Card/Card"
import DisplayCard from "../DisplayCard/DisplayCard";
import placeholder from "../../assets/placeholder.jpg"
import portfolio from "../../assets/portfolio.jpg"
import graphingcalculator from "../../assets/graphingcalculator.png"
import csclubbot from "../../assets/csclubbot.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import python from "../../assets/python.png"
import cpp from "../../assets/c++.png"
import ros from "../../assets/ros.png"
import foxglove from "../../assets/foxglove.png"
import pytorch from "../../assets/pytorch.png"
import blender from "../../assets/blender.png"
import foxglovehero from "../../assets/foxglovehero.png"
import datasethero from "../../assets/datasethero.png"
import sql from "../../assets/sql.png"
import java from "../../assets/java.png"
import react from "../../assets/react.svg"
import express from "../../assets/express.png"
import node from "../../assets/node.png"
import tailwind from "../../assets/tailwind.svg"
import postgresql from "../../assets/postgresql.svg"
import typescript from "../../assets/typescript.png"

function Projects({ innerRef }) {
    return (
        <Card title="Projects" innerRef={innerRef}>
            <Carousel displayCount={3}>
                <DisplayCard
                    title="Synthetic Image Classification Dataset Generation from Video"
                    link="https://github.com/YichenLiu06/retail-classification-dataset"
                    hero={datasethero}
                    secondaryIcons={[python,pytorch,blender]}
                >
                    
                    <ul className="ml-5 list-disc list-outside text-base marker:text-violet-400">
                        <li>Utilized COLMAP to generate 3D meshes from frames extracted from video</li>
                        <li>Performed instance segmentation with pre-trained Mask R-CNN in PyTorch to generate image masks</li>
                        <li>Automated mesh rendering through Blender’s API to generate training images for image classification</li>
                    </ul>
                </DisplayCard>
                <DisplayCard
                    title="Self-Driving Robot"
                    link="https://github.com/YichenLiu06/portfolio"
                    hero={foxglovehero}
                    secondaryIcons={[cpp, ros, foxglove]}
                >
                    
                    <ul className="ml-5 list-disc list-outside text-base marker:text-violet-400">
                        <li>Developed and optimized ROS2 nodes in C++, utilizing publisher-subscriber architecture over DDS protocol</li>
                        <li>Implemented real-time object detection and world modelling using a costmap with raw LiDAR data</li>
                        <li>Used A* search algorithm to plan around obstacles and construct the shortest path to a destination</li>
                        <li>Implemented a pure pursuit algorithm to control robot movement for precise path following</li>
                    </ul>
                </DisplayCard>
                <DisplayCard
                    title="Personal Website"
                    link="https://github.com/YichenLiu06/portfolio"
                    hero={portfolio}
                    secondaryIcons={[html, javascript, css, react, tailwind]}
                >
                    The website that you're on right now!
                    <ul className="ml-5 list-disc list-outside text-base marker:text-violet-400">
                        <li>Developed a front-end web application with React and Tailwind CSS</li>
                        <li>Utilized Spotify API and worked with OAuth to fetch data for a widget that displays the currently playing song</li>
                        <li>Utilized Three.js to create a customizable 3D header text component</li> 
                        <li>Wrote a dynamic carousel component used to display a variable number of block level elements, with a responsive sliding animation that halts on hover</li>
                    </ul>
                </DisplayCard>
                <DisplayCard
                    title="CS Club Discord Bot"
                    link="https://github.com/EzraH442/cs-club-bot"
                    hero={csclubbot}
                    secondaryIcons={[typescript]}
                >
                    A discord bot built for high school computer science club members to keep track of club meetings and compare Codeforces contest standings with other members
                    <ul  className="ml-5 list-disc list-outside text-base marker:text-violet-400">
                        <li>Utilized Codeforces API to fetch contest rankings of club members</li>
                        <li>Utilized Discord API to read and respond to messages on the platform, and relate Codeforces data of club
                        members to their Discord profile using JSON</li>
                        <li>Implemented pagination functionality to condense display of contest ranking system among club members.</li>  
                    </ul>
                </DisplayCard>
                <DisplayCard
                    title="Graphing Calculator"
                    link="https://github.com/YichenLiu06/portfolio"
                    hero={graphingcalculator}
                    secondaryIcons={[java]}
                >
                    A program to plot and evaluate single-variable functions 
                    <ul  className="ml-5 list-disc list-outside text-base marker:text-violet-400">
                        <li>Used Java Swing for the GUI in order to display function graphs</li>
                        <li>Wrote a recursive equation evaluation algorithm in Java to compare function values with points on the graph</li>
                    </ul>
                </DisplayCard>
                
                
            </Carousel>
        </Card>
    )
}

export default Projects;