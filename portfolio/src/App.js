import './App.css';
import  React,{useState,useEffect,useRef} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Archive></Archive>
        <Skills></Skills>
      </main>
      <Footer></Footer>
    </div>
  );
}

function Header(){
  const navToggle = useRef(null);
  const linksContainer =  useRef(null);
  const links = useRef(null);
  useEffect(()=>{
    navToggle.current.addEventListener("click", function () {
      // toggle 편하지만 아름답지 않다. 
      // css에서 height -> 0;
      const containerHeight = linksContainer.current.getBoundingClientRect().height;
      const linksHeight = links.current.getBoundingClientRect().height;
      if (containerHeight === 0) {
        linksContainer.current.style.height = `${linksHeight}px`;
      } else {
        linksContainer.current.style.height = 0;
      }
    });
  })

  return(
    <header id="home">
        <nav id="nav">
          <div className="nav__wrapper">
            <div className="nav__title">
                <a href="#home">Park Han Sol</a>
                <button className="nav-toggle" ref={navToggle}>
                    <FontAwesomeIcon icon={faBars} className="search" />
                </button>
            </div>
            
            <div className="nav__menu" ref={linksContainer}>
                <ul className="links" ref={links}>
                    <li><a href="#about" className="scroll-links">About</a></li>
                    <li><a href="#archive" className="scroll-links">Archive</a></li>
                    <li><a href="#skills" className="scroll-links">Skills</a></li>
                    <li><a href="#projects" className="scroll-links">Projects</a></li>
                    <li><a href="#contact" className="scroll-links">Contact</a></li>
                </ul>
            </div>
          </div>
        </nav>

        <figure className="hero">
            <div className="hero__wrapper">
                <h1>Devleoper</h1>
                <p>안녕하세요.</p>
                <p>웹 개발자 박한솔의 포트폴리오 페이지입니다.</p>
                <p>항상 사용자 입장에서 생각하며, 재사용성 높은 코드들을 좋아합니다.</p>
            </div>
        </figure>
    </header>
  )
}

function About(){



  return(
    <section class="section" id="about">
      <div class="section-title">
        <h2>about</h2>
        <p>
          제 자신에 대한 소개와 약력, 목표 등을 적었습니다.
        </p>
      </div>

      <div class="section__wrapper about__wrapper">
        <article class="about__content about__wrapper-img">
        </article>

        <article class="about__content about">
          <div class="btn-container">
            <button class="tab-btn active" data-id="introduction">introduction</button>
            <button class="tab-btn" data-id="profile">profile</button>
            <button class="tab-btn" data-id="visions">visions</button>
          </div>

          <div class="about-content">
            <div class="content active" id="introduction">
              <h4>introduction</h4>
              <p>
                I'm baby wolf pickled schlitz try-hard normcore marfa man bun
                mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
                rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard
                tilde try-hard, woke fixie banjo man bun. Small batch tumeric
                mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
                direct trade hoodie ugh chambray, craft beer pork belly flannel
                tacos single-origin coffee art party migas plaid pop-up.
              </p>
            </div>
            <div class="content" id="profile">
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
            <div class="content" id="visions">
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
  )
}

function Archive(){
  return(
    <section id="archive" class="section">
      <div class="section-title">
        <h2>archive</h2>
        <p>
          학습한 내용, 수행한 프로젝트 등을 정리한 저장소들을 소개합니다. 
        </p>
      </div>
      <div class="section__wrapper archive__wrapper">
        <article class="archive__content github">
          <div class="archive__content-logo"></div>
          <hr width="100%" color="black" size="2"/>
          <a href="https://github.com/livingsnow011" target="_blank"><h4>&nbsp https://github.com/livingsnow011</h4></a>
          <h4>&nbsp 소스코드 저장소</h4>
          <p>&nbsp 수행한 프로젝트를 저장했습니다.</p>
        </article>
        
        <article class="archive__content tistory">
          <div class="archive__content-logo"></div>
          <hr width="100%" color="black" size="2"/>
          <a href="https://livingsnow011.tistory.com/" target="_blank"><h4>&nbsp https://livingsnow011.tistory.com/</h4></a>
          <h4>&nbsp 개인 블로그</h4>
          <p>&nbsp 트러블 슈팅, 정리, 일상생활 등을 기록.</p>
        </article>
      </div>
    </section>
  )
}

function Skills(){
  return(
    <section id="skills" class="section">
      <div class="section-title">
        <h2>skills</h2>
        <p>
          제가 학습했고, 프로젝트에서 활용한 기술 스택들을 소개합니다.
        </p>
      </div>
      <div class="section__wrapper skills__wrapper">
        <article class="skills">
          <div class="skills-name">
            <h3>Front-end</h3>
          </div>
          <div class="skills__container">
            <div class="skill"><img src="../public/assets/img/skills-logo/html5.png" alt="html5" /></div>
            <div class="skill"><img src="../public/assets/img/skills-logo/css3.png" alt="css3" /></div>
            <div class="skill"><img src="../public/assets/img/skills-logo/js.png" alt="js" /></div>
            <div class="skill"><img src="../public/assets/img/skills-logo/ts.png" alt="ts" /></div>
            <div class="skill"><img src="../public/assets/img/skills-logo/react.png" alt="react" /></div>
          </div>
        </article>
        <article class="skills">
          <div class="skills-name">
            <h3>Back-end</h3>
          </div>
          <div class="skills__container">
            <div class="skill"><img src="../public/assets/img/skills-logo/java.png" alt="java" /></div>
            <div class="skill"><img src="../public/assets/img/skills-logo/spring.png" alt="spring" /></div>
            <div class="skill"><img src="../public/assets/img/skills-logo/node.png" alt="node" /></div>
            <div class="skill"><img src="../public/assets/img/skills-logo/express.png" alt="express" /></div>
            <div class="skill"><img src="../public/assets/img/skills-logo/mysql.png" alt="mysql" /></div>
          </div>
        </article>
        <article class="skills">
          <div class="skills-name">
            <h3>Deployment</h3>
          </div>
          <div class="skills__container">
            <div class="skill"><img src="../public/assets/img/skills-logo/docker.png" alt="docker" /></div>
            <div class="skill"><img src="../public/assets/img/skills-logo/aws.png" alt="aws" /></div>
            <div class="skill"><img src="../public/assets/img/skills-logo/vercel.png" alt="vercel" /></div>
          </div>
        </article>
      </div>
    </section>
  )
}

function Footer(){
  return(
    <footer >
      <p>
      </p>
    </footer>
  )
}
export default App;
