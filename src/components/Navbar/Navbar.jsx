import Navlink from "./Navlink/Navlink";
import homeIcon from "../../assets/home.svg";
import aboutIcon from "../../assets/about.svg";
import projectsIcon from "../../assets/projects.svg";
import resumeIcon from "../../assets/resume.svg";
import githubIcon from "../../assets/github.svg";
import linkedInIcon from "../../assets/linkedin.svg";
import discordIcon from "../../assets/discord.svg";
import mailIcon from "../../assets/mail.svg";

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

function Navbar({scrollToAbout, scrollToProjects}) {

  const navLinks = [
    {
      icon: homeIcon,
      url: "",
      text: "Home",
      handleClick: () => {scrollTo({top: 0, behavior:"smooth"})}
    },
    {
      icon: aboutIcon,
      url: "",
      text: "About",
      handleClick: scrollToAbout
    },
    {
      icon: projectsIcon,
      url: "",
      text: "Projects",
      handleClick: scrollToProjects
    },
    {
      icon: resumeIcon,
      url: "/resume.pdf",
      text: "Resume",
    },
  ];

  return (
    <ul className="flex flex-row justify-between sticky top-0 bg-slate-900 z-50">
      <ul className="flex flex-row">
        {navLinks.map((link) => {
          return <Navlink icon={link.icon} url={link.url} text={link.text} handleClick={link.handleClick}/>;
        })}
      </ul>
      <ul className="flex justify-end items-center gap-6">
        {navIcons.map((icon) => {
          return (
            <div >
              <a href={icon.link}>
                <img src={icon.icon} className="w-5 h-7" />
              </a>
            </div>
        );
        })}
      </ul>
    </ul>
  );
}

export default Navbar;
