import { useState } from "react";
import DropDown from "../dropDown/dropDown";
import "react-dropdown/style.css";

const PartySquares = (props) => {
  // const [partySquare, setPartySquare] = useState()
  const [value, setValue] = useState(
    "portfolio/src/partySquareComponents/Components/Color=Black, Fun=False, Corners=Rounded, Solid=True.png"
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("value is ", value);
    props.removeItem(value);
    setValue("");
    //get value from state
    // add value to App state w/o manipulating previous state
    return ;
  };
  return (
    <section>
      <div className="page-explanation">
        <h6>
          <span className="icon"></span> EXPLORATION
        </h6>
        <h2>What's a party Square?</h2>
        <p>
          Party squares are an exploration into the iterative potential of
          component systems.With this project, I set out to demystify use cases
          for variants and properties within Figma.
        </p>
      </div>
      <div className="partysquare-container">
        <img src={value} alt="" />
      </div>
      <div className="partySquares-form">
        <form onSubmit={handleSubmit}>
          <div>
            <span className="party-icon"></span>
            <h6>Party Squares</h6>
          </div>
          <label>
            Name:
            <input type="text" value={value} onChange={handleChange} />
          </label>

          <label>
            Main:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <label>
            Proptein:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <label>
            Rice:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <label>
            Sauce:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <label>
            Drink:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <label>
            Cost:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};
export default PartySquares;
