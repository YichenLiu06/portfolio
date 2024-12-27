import Card from "../Card/Card";
import avatar from "../../assets/avatar.jpg"
import { about } from "../../data/data";
import SpotifyWidget from "../SpotifyWidget/SpotifyWidget";
import SlidingText from "../TitleText/TitleText";
import githubIcon from "../../assets/github.svg";
import linkedInIcon from "../../assets/linkedin.svg";
import discordIcon from "../../assets/discord.svg";
import mailIcon from "../../assets/mail.svg";
import TitleText from "../TitleText/TitleText";


const navIcons = [
  {
    icon:  mailIcon,
    link: "mailto:yichen.liu@hotmail.com"
  },
  {
    icon:  githubIcon,
    link: "https://github.com/YichenLiu06"
  },
  {
    icon:  linkedInIcon,
    link: "https://www.linkedin.com/in/yichen-liu-9597b3271/"
  },
  {
    icon:  discordIcon,
    link: "https://discord.com/invite/XGxx6BjB"
  }
];

function About({innerRef}){
    return(
        <>
            <TitleText text="Introduction"/>
            <Card title="About" innerRef={innerRef} className="">
                <div className="flex flex-row gap-8 items-stretch">
                    
                    
                    
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex flex-row items-center">
                            <img src={avatar} className=" size-40 rounded-xl float-left mr-6" /> 
                            <p>
                                Hello! My name is <span className="text-violet-400">Yichen Liu</span> and I am currently a first year student majoring in <span className="text-violet-400">Computer Science</span> at the <span className="text-violet-400">University of Waterloo</span>. I am currently focused on building strong fundamental skills in <span className="text-violet-400">Web Development</span>, and am always seeking to create easy to use software that utilizes technology to its full potential. However, I am eager to  explore new fields of computer science in the future, such as <span className="text-violet-400">Machine Learning and Human Computer Interaction</span>, and hope to apply software in fun and creative ways.
                                {'\n \n'} 
                                In my free time, I like to draw and am currently trying my hand at digital art. I love and appreciate animation, and am always gushing over my favourite works that push the boundaries of the medium. I’m almost always listening to something, and you can find almost every genre and subgenre of rock in my Spotify playlists. <span className="text-violet-400">You can see what I'm listening to right now below!</span>
                            </p>
                        </div>  
                        <SpotifyWidget />
                    </div>
                </div>
               
            </Card>
        </>
        
    )
}

export default About;