import { Link } from "react-router-dom";
import PartySquares from "../partySquares/partySquares";
import { Button } from "react-bootstrap";
import './landPage.css'
import Image from 'react-bootstrap/Image'
const LandingPage = () => {
  return (
    <section>
      <div className="center-card">
      <h3>UX/UI DESIGN</h3>
      <h2>Portfolio</h2>
      <div className="icon-hero">
        <img ></img>
        <div className='hero-text'>
        <h1>Mary Jorgenson</h1>
        <h4>Product Designer</h4>
        </div>
      </div>
      </div>
      <Link to="partysquares" element={<PartySquares />}>
        <div>
          <span className="party-icon"></span>
          <Button>Party Squares</Button>
        </div>
      </Link>
    </section>
  );
};
export default LandingPage;
