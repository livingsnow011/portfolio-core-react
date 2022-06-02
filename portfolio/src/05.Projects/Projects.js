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
          <h2>Project Title</h2>
          <h4>Project 기간</h4>
          <div className="project__content"></div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
