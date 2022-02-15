import { Link } from "react-router-dom";
import DropDown from "../dropDown/dropDown";

const Header = () => {
  return (
    <header>
      <div className="colored-square">
        <h1>mj</h1>
      </div>
      <Link to="/cover" element={<DropDown />}>
        <div className="hamburger">Hamburg icon</div>
      </Link>
    </header>
  );
};
export default Header