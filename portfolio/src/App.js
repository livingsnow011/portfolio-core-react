import "./App.css";

import Header from "./01.Header/Header";
import About from "./02.About/About";
import Archive from "./03.Archive/Archive";
import Skills from "./04.Skills/Skills";
import Projects from "./05.Projects/Projects";
import Contact from "./06.Contact/Contact";
import Footer from "./07.Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Archive></Archive>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
