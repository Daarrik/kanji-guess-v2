import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../icons/linkedin.svg";

interface NavLink {
  name: string;
  url: string;
  icon: React.ReactElement;
}

export const links: Array<NavLink> = [
  {
    name: "github",
    url: "https://github.com/Daarrik",
    icon: <GithubIcon />,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/Daarrik",
    icon: <LinkedinIcon />,
  },
];
