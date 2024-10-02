import Navbar from "./component/NavBar/navbar";
import Intro from "./component/Intro/intro";
import Skills from "./component/Skills/skills";
import Works from "./component/Works/works";
import Contact from "./component/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
