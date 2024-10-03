import Navbar from "./component/NavBar/navbar";
import Intro from "./component/Intro/intro";
import Skills from "./component/Skills/skills";
import Works from "./component/Works/works";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";

function App() {
  return (
    <div className="App">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
