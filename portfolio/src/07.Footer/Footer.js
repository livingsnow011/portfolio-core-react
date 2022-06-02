import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>
        <FontAwesomeIcon
          icon={faCopyright}
          className="footer-icon"
          aria-hidden="true"
        ></FontAwesomeIcon>{" "}
        2022. PARK HAN SOL. COPYLEFT ALL WRONGS RESERVED
      </p>
    </footer>
  );
}

export default Footer;
