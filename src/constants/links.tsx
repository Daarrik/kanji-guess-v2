import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../icons/linkedin.svg";

type NavLink = {
  name: string;
  url: string;
  icon: React.ReactElement;
}

export const links: NavLink[] = [
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
