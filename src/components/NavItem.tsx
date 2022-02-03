interface NavItemProps {
  url: string;
  icon: React.ReactElement;
}

const NavbarItem: React.FC<NavItemProps> = ({ url, icon }) => {
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
