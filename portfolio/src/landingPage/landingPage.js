import { Link } from "react-router-dom";
import PartySquares from "../partySquares/partySquares";

const LandingPage = () => {
  return (
    <section>
      <h3>UX/UI DESIGN</h3>
      <h1>Portfolio</h1>
      <div className="icon-hero">
        <div className="headshot-img"></div>
        <h2>Mary Jorgenson</h2>
        <h4>Product Designer</h4>
      </div>
      <Link to="partysquares" element={<PartySquares />}>
        <div>
          <span className="party-icon"></span>
          <h6>Party Squares</h6>
        </div>
      </Link>
    </section>
  );
};
export default LandingPage;
