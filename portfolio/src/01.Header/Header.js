import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  const navToggle = useRef(null);
  const linksContainer = useRef(null);
  const links = useRef(null);
  const navbar = useRef(null);
  useEffect(() => {
    navToggle.current.addEventListener("click", function () {
      const containerHeight =
        linksContainer.current.getBoundingClientRect().height;
      const linksHeight = links.current.getBoundingClientRect().height;
      if (containerHeight === 0) {
        linksContainer.current.style.height = `${linksHeight}px`;
      } else {
        linksContainer.current.style.height = 0;
      }
    });

    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      const navHeight = navbar.current.getBoundingClientRect().height;

      if (scrollHeight > navHeight) {
        navbar.current.classList.add("fixed-nav");
      } else {
        navbar.current.classList.remove("fixed-nav");
      }

      //지워라
      linksContainer.current.style.height = 0;
    });
  });

  return (
    <header id="home">
      <nav id="nav" ref={navbar}>
        <div className="nav__wrapper">
          <div className="nav__title">
            <a href="#home">Park Han Sol</a>
            <button className="nav-toggle" ref={navToggle}>
              <FontAwesomeIcon icon={faBars} className="search" />
            </button>
          </div>

          <div className="nav__menu" ref={linksContainer}>
            <ul className="links" ref={links}>
              <li>
                <a href="#about" className="scroll-links">
                  About
                </a>
              </li>
              <li>
                <a href="#archive" className="scroll-links">
                  Archive
                </a>
              </li>
              <li>
                <a href="#skills" className="scroll-links">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="scroll-links">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="scroll-links">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <figure className="hero">
        <div className="hero__wrapper">
          <h1>Develeoper</h1>
          <p>안녕하세요.</p>
          <p>웹 개발자 박한솔의 포트폴리오 페이지입니다.</p>
          <p>끊임없이 도전하는 개발자입니다.</p>
        </div>
      </figure>
    </header>
  );
}

export default Header;
