import { ReactComponent as GithubSVG } from "../icons/github.svg";
import { ReactComponent as LinkedinSVG } from "../icons/linkedin.svg";

interface NavLink {
  name: string;
  url: string;
  svg: React.ReactElement;
}

// Consider: links: NavLink[]
export const links: Array<NavLink> = [
  {
    name: "github",
    url: "https://github.com/Daarrik",
    svg: <GithubSVG />,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/Daarrik",
    svg: <LinkedinSVG />,
  },
];
