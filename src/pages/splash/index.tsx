import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import styles from "../../styles";

const SplashContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${styles.mainBackgroundColor};

  img {
    transition: 1s;
    opacity: 1;
  }
`;

export default function Splash() {
  const styleRef = useRef<any>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      styleRef.current.style.opacity = 0;
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <SplashContainer>
      <img ref={styleRef} src="/images/img_Logo.png" alt="" />
    </SplashContainer>
  );
}
