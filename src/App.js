import Landing from "./components/Landing/Landing";
import ProjectList from "./components/ProjectList/ProjectList";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Social from "./components/Social/Social";
import Navbar from "./components/NavBar/NavBar";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Navbar />
      <Social />
      <Landing />
      <ProjectList />
      <About />
      <Contact />

      {/* <Modal /> */}
    </>
  );
}

export default App;
