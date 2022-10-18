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
          <div className="project__content" style={{ border: "solid red 1px" }}>
            <div className="project__content-img">
              <img
                src="assets/img/portfolio/ticketingweb.jpg"
                alt="ticketingweb"
              />
            </div>
            <div className="project__content-script"></div>
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
