import Landing from "./components/Landing/Landing";
import ProjectList from "./components/ProjectList/ProjectList";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Social from "./components/Social/Social";
import Navbar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
import styled from "styled-components";
import Preloader from "./components/Preloader/Preloader";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4700);
  }, []);

 
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Social />
          <Landing />
          <ProjectList />
          <About />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
