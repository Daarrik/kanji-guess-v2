const NavbarItem = ({ icon, url }) => {
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
