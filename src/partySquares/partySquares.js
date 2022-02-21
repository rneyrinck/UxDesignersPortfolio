import { useState } from "react";
import DropDown from "../dropDown/dropDown";
import "react-dropdown/style.css";
import "./partySquares.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineExplore } from "react-icons/md";
import {
  Button,
  Card,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
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
    return;
  };
  return (
    <section>
      <div className="page-explanation">
        <div className="exploration">
          <MdOutlineExplore className="svg_icons" /> <h6>EXPLORATION</h6>
        </div>
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
    <div className="party-square-img">
      <img src={value}></img>
    </div>
      <h2>Party Squares</h2>
      <Form>
        <Row>
          <Col>
            <Form.Label column sm="2">
              Color
            </Form.Label>
          </Col>
          <Col>
            <DropdownButton
              variant="outline-secondary"
              title="Red"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Black</Dropdown.Item>
              <Dropdown.Item href="#">Yellow</Dropdown.Item>
              <Dropdown.Item href="#">Peach</Dropdown.Item>
              <Dropdown.Item href="#">Lilac</Dropdown.Item>
              <Dropdown.Item href="#">Blue</Dropdown.Item>
              <Dropdown.Item href="#">Red</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label column sm="2">
              Fun
            </Form.Label>
          </Col>
          <Col>
            <Form.Check type="switch" id="custom-switch" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label column sm="2">
              Corners
            </Form.Label>
          </Col>
          <Col>
            <DropdownButton
              variant="outline-secondary"
              title="Rounded"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Sharp</Dropdown.Item>
              <Dropdown.Item href="#">Yellow</Dropdown.Item>
              <Dropdown.Item href="#">Surprise</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label column sm="2">
              Solid
            </Form.Label>
          </Col>
          <Col>
            <Form.Check type="switch" id="custom-switch" />
          </Col>
        </Row>
      </Form>
    </section>
  );
};
export default PartySquares;
