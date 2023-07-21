import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Homepage</Link>
      <Link to="/menu">contact</Link>
      <Link to="/contact">contact</Link>
    </nav>
  );
};

export default Navbar;
