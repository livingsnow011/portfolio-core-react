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
                안녕하세요 웹 개발자를 지망하는 박한솔입니다. 대학교에서 타전공
                경험을 위해 들은 IT 융합전공 프로그램에서 개발 분야에 매력을
                느끼게 되어 개발자를 목표로 삼았습니다. 끊임없는 자기계발과
                노력에 따라 본인의 가치를 상승시킬 수 있는 개발 직군이
                매력적으로 다가왔습니다. 효율적인 로직을 구축할 수 있는 백엔드
                개발자가 되기 위해 노력하고 있습니다. 원할한 팀플레이를 위해
                사람들과 편안한 관계를 구축하는 것을 목표로 합니다.
              </p>
            </div>
            <div className="content" id="profile" ref={profileElement}>
              <h4>Profile</h4>
              <p>
                이름 : 박한솔
                <br />
                <br />
                나이 : 1994.02.07
                <br />
                <br />
                주소 : 서울시 영등포구 당산동
                <br />
                <br />
                번호 : 010-4491-5770
                <br />
                <br />
                학교 : 한국항공대학교 IT 융합학부
                <br />
                <br />
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
