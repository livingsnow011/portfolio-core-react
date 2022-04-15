import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <header>
        <Hero/>
      </header>
      <main>
        <About/>
        <Archive/>
        <Skills/>
        <Projects/>
      </main>
    </div>
  );
}

function Navbar(){
  // const navbar = document.querySelector('#navbar');
  // const navbarHeignt = navbar.getBoundingClientRect().height;

  // document.addEventListener('scroll', () => {
  //   if(window.scrollY > navbarHeignt) {
  //     navbar.classList.add('navbar--dark');
  //   } else {
  //     navbar.classList.remove('navbar--dark');
  //   }
  // });
  return(
    <nav id="navbar">
      <div className="navbar__logo">
        <a href="#hero" >PHS'portolio</a>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu__item">About</li>
        <li className="navbar__menu__item">Archive</li>
        <li className="navbar__menu__item">Skills</li>
        <li className="navbar__menu__item">Projects</li>
        <li className="navbar__menu__item">Contact</li>
      </ul>
    </nav>
  )
}

function Hero(){
  return(
    <div id="hero">
      <div className="hero__container">
        <h1><span>Developer</span></h1>
        <span className="des">백엔드 개발자를 지망하는 박한솔입니다.</span>
        <span className="des">저는 똥을 잘쌉니다. 뿌직</span>
      </div>
    </div>
  )
}

function About(){
  return (
    <article className="contents" id="about">
      <div className="about__title titles">
        <h1>About</h1>
      </div>
      <div className="about__container containers">
        <div className="about__container__des"></div>
        <div className="about__container__img"></div>
      </div>
    </article>
  );
}

function Archive(){
  return (
    <article className="contents" id="archive">
      <div className="titles">
        <h1>Archive</h1>
      </div>
      <div className="containers"></div>
    </article>
  );
}

function Skills(){
  return (
    <article className="contents" id="skills">
      <div className="titles">
        <h1>Skills</h1>
      </div>
      <div className="containers"></div>
    </article>
  );
}

function Projects(){
  return (
    <article className="contents" id="projects">
      <div className="titles">
        <h1>Projects</h1>
      </div>
      <div className="containers"></div>
    </article>
  );
}

export default App;
