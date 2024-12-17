import Navlink from "./Navlink/Navlink";
import homeIcon from "../../assets/home.svg";
import aboutIcon from "../../assets/about.svg";
import projectsIcon from "../../assets/projects.svg";
import resumeIcon from "../../assets/resume.svg";
import githubIcon from "../../assets/github.svg";
import linkedInIcon from "../../assets/linkedin.svg";
import discordIcon from "../../assets/discord.svg";
import mailIcon from "../../assets/mail.svg";

const navLinks = [
  {
    icon: homeIcon,
    url: "",
    text: "Home",
  },
  {
    icon: aboutIcon,
    url: "",
    text: "About",
  },
  {
    icon: projectsIcon,
    url: "",
    text: "Projects",
  },
  {
    icon: resumeIcon,
    url: "",
    text: "Resume",
  },
];

const icons = [mailIcon, githubIcon, linkedInIcon, discordIcon];

function Navbar() {
  return (
    <ul className="flex flex-row justify-between p-4">
      <ul className="flex flex-row divide-x-2">
        {navLinks.map((link) => {
          return <Navlink icon={link.icon} url={link.url} text={link.text} />;
        })}
      </ul>
      <ul className="flex justify-end gap-2">
        {icons.map((icon) => {
          return <img src={icon} className="block w-7 h-7" />;
        })}
      </ul>
    </ul>
  );
}

export default Navbar;
