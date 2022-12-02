import { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
import styled from "styled-components";

const Preloader = ({ setLoading }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  async function reveal() {
    const t1 =  gsap.timeline({});

      await t1
      .to(".follow", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 1.2,
        delay: 0.5,
      })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 });
    if (!t1.isActive()) {
       await setLoading(false);
    }
  }

  return (
    <AppContainer>
      <Loading>
        <Follow className="follow"></Follow>
        <ProgressBar
          className="hide"
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></ProgressBar>
      </Loading>

      <Content className="content"></Content>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
`;
const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;
const Follow = styled.div`
  position: absolute;
  background: linear-gradient(112.1deg, #000000 11.4%, #2d3436 70.2%);
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Content = styled.div`
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #000000;
  padding: auto;
  z-index: 2;
  overflow: hidden;
  color: #fff;
`;

export default Preloader;
