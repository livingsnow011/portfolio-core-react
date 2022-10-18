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
                느끼게 되어 개발자를 목표로 삼았습니다. 개발자가 되기 위해 졸업
                후 SESAC MSA 교육과정에서 웹에 대한 공부를 하였고, 관련
                자격증들을 취득했습니다. 향후 많은 개발자들 분들과 협업을 하고
                싶고, 협업할 때 한 사람의 몫을 제대로 하면서 개발에 기여하고
                싶습니다. 능숙할 때에는 이끌 수 있고 부족할 때에는 배울 수 있는
                개발자가 되고 싶습니다.
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
              <p>1. 커리어를 시작하여 저만의 전문분야를 갖고 싶습니다.</p>
              <p>2. 클라우드 및 MSA 환경에서 개발을 숙달하고 싶습니다.</p>
              <p>3. 클라우드,쿠버네티스 자격증을 취득하고 싶습니다.</p>
              <p>4. 대규모 사용자 대상 서비스를 경험하고 싶습니다.</p>
              <p>5. 회사 근처에서 자취하고 싶습니다.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
