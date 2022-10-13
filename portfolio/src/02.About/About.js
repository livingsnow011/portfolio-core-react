import "./About.css";
import { useRef } from "react";

function About() {
  const introductionBTN = useRef(null);
  const profileBTN = useRef(null);
  const visionsBTN = useRef(null);

  const introductionElement = useRef(null);
  const profileElement = useRef(null);
  const visionsElement = useRef(null);

  const onClick = (e) => {
    const id = e.target.dataset.id;
    if (id) {
      introductionBTN.current.classList.remove("active");
      profileBTN.current.classList.remove("active");
      visionsBTN.current.classList.remove("active");

      e.target.classList.add("active");

      introductionElement.current.classList.remove("active");
      profileElement.current.classList.remove("active");
      visionsElement.current.classList.remove("active");

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  };
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>about</h2>
        <p>제 자신에 대한 소개와 약력, 목표 등을 적었습니다.</p>
      </div>

      <div className="section__wrapper about__wrapper">
        <article className="about__content about__wrapper-img"></article>

        <article className="about__content about" onClick={onClick}>
          <div className="btn-container">
            <button
              className="tab-btn active"
              data-id="introduction"
              ref={introductionBTN}
            >
              introduction
            </button>
            <button className="tab-btn" data-id="profile" ref={profileBTN}>
              profile
            </button>
            <button className="tab-btn" data-id="visions" ref={visionsBTN}>
              visions
            </button>
          </div>

          <div className="about-content">
            <div
              className="content active"
              id="introduction"
              ref={introductionElement}
            >
              <h4>introduction</h4>
              <p>
                안녕하세요 웹 개발자를 지망하는 박한솔입니다
                <br />
                IT 융합전공 프로그램을 통해 개발자를 목표로 삼았습니다.
                <br />
                졸업 후엔 SESAC MSA 과정을
              </p>
            </div>
            <div className="content" id="profile" ref={profileElement}>
              <h4>Profile</h4>
              <p>
                Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
                crucifix offal deep v hella biodiesel. Church-key listicle
                polaroid put a bird on it chillwave palo santo enamel pin,
                tattooed meggings franzen la croix cray. Retro yr aesthetic four
                loko tbh helvetica air plant, neutra palo santo tofu mumblecore.
                Hoodie bushwick pour-over jean shorts chartreuse shabby chic.
                Roof party hammock master cleanse pop-up truffaut, bicycle
                rights skateboard affogato readymade sustainable deep v
                live-edge schlitz narwhal.
              </p>
            </div>
            <div className="content" id="visions" ref={visionsElement}>
              <h4>visions</h4>
              <p>
                Chambray authentic truffaut, kickstarter brunch taxidermy vape
                heirloom four dollar toast raclette shoreditch church-key.
                Poutine etsy tote bag, cred fingerstache leggings cornhole
                everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk
                swag, mixtape hashtag marfa readymade direct trade man braid
                cold-pressed roof party. Small batch adaptogen coloring book
                heirloom. Letterpress food truck hammock literally hell of wolf
                beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie,
                banh mi salvia venmo photo booth quinoa chicharrones.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
