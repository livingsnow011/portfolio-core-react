import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-title">
        <h2>skills</h2>
        <p>제가 경험한 기술 스택들을 소개합니다.</p>
      </div>
      <div className="section__wrapper skills__wrapper">
        <article className="skills">
          <div className="skills-name">
            <h3>Front-end</h3>
          </div>
          <div className="skills__container">
            <div className="skill">
              <img src="assets/img/skills-logo/html5.png" alt="html5" />
            </div>
            <div className="skill">
              <img src="assets/img/skills-logo/css3.png" alt="css3" />
            </div>
            <div className="skill">
              <img src="assets/img/skills-logo/js.png" alt="js" />
            </div>
            <div className="skill">
              <img src="assets/img/skills-logo/ts.png" alt="ts" />
            </div>
            <div className="skill">
              <img src="assets/img/skills-logo/react.png" alt="react" />
            </div>
          </div>
        </article>
        <article className="skills">
          <div className="skills-name">
            <h3>Back-end</h3>
          </div>
          <div className="skills__container">
            <div className="skill">
              <img src="assets/img/skills-logo/java.png" alt="java" />
            </div>
            <div className="skill">
              <img src="assets/img/skills-logo/spring.png" alt="spring" />
            </div>
            <div className="skill">
              <img src="assets/img/skills-logo/node.png" alt="node" />
            </div>
            <div className="skill">
              <img src="assets/img/skills-logo/express.png" alt="express" />
            </div>
            <div className="skill">
              <img src="assets/img/skills-logo/mysql.png" alt="mysql" />
            </div>
          </div>
        </article>
        <article className="skills">
          <div className="skills-name">
            <h3>Deployment</h3>
          </div>
          <div className="skills__container">
            <div className="skill">
              <img src="assets/img/skills-logo/docker.png" alt="docker" />
            </div>
            <div className="skill">
              <img src="assets/img/skills-logo/aws.png" alt="aws" />
            </div>
            <div className="skill">
              <img src="assets/img/skills-logo/vercel.png" alt="vercel" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Skills;
