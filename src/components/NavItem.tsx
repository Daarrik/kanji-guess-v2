import React from "react";

interface Props {
  icon: React.ReactElement;
  url: string;
}

const NavbarItem: React.FC<Props> = ({ icon, url }) => {
  return (
    <a
      className="flex-center navitem"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default NavbarItem;
