import Nav from "./Nav";

const Footer: React.FC = () => {
  return (
    <div id="footer" className="flex-center">
      <h1 id="title">Darrik Houck</h1>
      <div className="padding-right">
        <p className="text-eng">darrikwh@gmail.com</p>
      </div>
      <Nav />
    </div>
  );
};

export default Footer;
