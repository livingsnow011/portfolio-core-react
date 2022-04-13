import './App.css';

function App() {
  return (
    <div>
      <Hero></Hero>
    </div>
  );
}


function Hero(){
  return(
    <div className="hero-image">
      <div className="container">
        <h1><span>gscode</span></h1>
        <span className="des">Web Developer // Web Designer</span>
        <a className="btn" href="#">Hire me</a>
      </div>
    </div>
  )
}

export default App;
