import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDizzy } from "@fortawesome/free-regular-svg-icons";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-title">
        <h2>projects</h2>
        <p>개인별, 팀별로 수행했었던 프로젝트들을 소개합니다.</p>
      </div>
      <div className="section__wrapper projects__wrapper">
        <article className="project">
          <h3>Ticketing Web Project</h3>
          <h4>3人 프로젝트</h4>
          <div className="project__content">
            <div className="project__content-img">
              <img
                src="assets/img/portfolio/ticketingweb.jpg"
                alt="ticketingweb"
              />
            </div>
            <div className="project__content-script">
              <div className="overview">
                <h4>OverView</h4>
                <p style={{ color: "black" }}>
                  <b>선착순이 아닌 추첨을 통한 예매 서비스</b>입니다. 총 3명이
                  팀으로 개발하였으며 그 안에서 저는{" "}
                  <b>공연 및 좌석 CRUD와 뷰 템플릿</b>을 담당하였습니다.
                  <br />
                  <b>Spring boot 환경</b>에서 다른 개발자 수강생들과 협업하여
                  만들었으며, 그 과정에서 많은 것을 배울 수 있었습니다. 개발에
                  들어가기 전에 trello와 DB설계를 위한 회의를 자주 했습니다.
                </p>
              </div>
              <div className="technology">
                <h4>Technology</h4>
                <p style={{ color: "black" }}>
                  <b>
                    ● Frontend : thymeleaf, bootstrap
                    <br />
                    ● Backend : Springboot, JPA
                    <br />
                    ● Database : MySQL5
                    <br />● deploy : AWS (EC2,RDS)
                  </b>
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="project">
          <h3>포트폴리오 페이지</h3>
          <h4>1人 프로젝트</h4>
          <div className="project__content"></div>
          <div className="project__content">
            <div className="project__content-img">
              <img src="assets/img/portfolio/portfolio.jpg" alt="portfolio" />
            </div>
            <div className="project__content-script">
              <div className="overview">
                <h4>OverView</h4>
                <p style={{ color: "black" }}>
                  <b>개인 포트폴리오 웹 사이트</b> 입니다. 현재 보고 계신 웹
                  페이지입니다. 서버를 vercel 호스팅 서비스에 맡기고
                  <b> 정적 웹페이지</b>만을 개발했습니다. <br />
                  <b>React</b>를 사용하여 만들었으며, 직접{" "}
                  <b> 가비아 도메인을 구매</b>하여 호스팅 사이트와 연결했습니다.
                </p>
              </div>
              <div className="technology">
                <h4>Technology</h4>
                <p style={{ color: "black" }}>
                  <b>
                    ● Frontend : React
                    <br />
                    ● Deploy : Vercel
                    <br />● Domain : 가비아 도메인 서비스
                  </b>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
