const NavbarItem = ({ icon, url }) => {
  return (
    <a 
      className='navitem'
      href={ url }
      target="_blank"
      rel="noopener noreferrer"
    >
      { icon }
    </a>
  );
}

export default NavbarItem;
