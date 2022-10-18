import "./Projects.css";
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
              <p style={{ color: "black" }}>
                <b>선착순이 아닌 추첨을 통한 예매 서비스</b>입니다. 총 3명이
                팀으로 개발하였으며 그 안에서 저는{" "}
                <b>공연 및 좌석 CRUD와 뷰 템플릿</b>을 담당하였습니다.
                <br />
                <br />
                <a href="">readme.md </a>
              </p>
            </div>
          </div>
        </article>
        <article className="project">
          <h3>포트폴리오 웹페이지 개발</h3>
          <h4>1人 프로젝트</h4>
          <div className="project__content"></div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
