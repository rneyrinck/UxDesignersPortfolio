// import { BsLinkedin,BsBookmarkXFill,BsBookmarkPlus,BsDownload,BsShare  } from "react-icons/bs";
import { SiNotion, SiLinkedin } from "react-icons/si";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <a>
          <SiLinkedin className="svg_icons" />
        </a>
        <a>
          <SiNotion className="svg_icons" />
        </a>
      </div>
      <a href="">mary.r.jorgenson@gmail.com -{">"}</a>
    </footer>
  );
};
export default Footer;
