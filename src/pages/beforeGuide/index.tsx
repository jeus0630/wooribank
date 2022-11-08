import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles";

const BeforeGuideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  background-color: ${styles.mainBackgroundColor};
  z-index: 10;
  transition: 1s;
  opacity: 0;

  img {
    width: 339px;
    height: 341px;
    margin-top: 89px;
    transition: 1s;
  }
`;

const BeforeGuideText = styled.span`
  margin-top: 49px;
  text-align: center;
  font-size: 28px;
  color: ${styles.baseColor};
  font-weight: 500;

  span {
    color: ${styles.HighlightColor};
    font-weight: 700;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 48px;

  button {
    width: 100%;
    height: 56px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const GuideButton = styled.button`
  background-color: ${styles.baseColor};
  color: #fff;
  border: none;
`;

const BeforeGuideButton = styled.button`
  background-color: transparent;
  color: rgb(95, 98, 102);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

interface Props {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export default function BeforeGuide({ loading, setLoading }: Props) {
  const styleRef = useRef<any>();
  const navigate = useNavigate();

  const handleMoveGuide = () => {
    styleRef.current.style.opacity = 0;
    setTimeout(() => {
      setLoading(!loading);
      navigate("/onboarding");
    }, 1000);
  };

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        styleRef.current.style.opacity = 1;
      }, 100);
    }
  }, []);

  return (
    <BeforeGuideContainer ref={styleRef}>
      <img src="/images/iu.png" alt="" />
      <BeforeGuideText>
        알길 <span>원</span>해? <br /> 우리 <span>WON</span>해! <br />
        <span>우리</span>믿고 금융해!
      </BeforeGuideText>
      <ButtonContainer>
        <GuideButton onClick={handleMoveGuide}>
          새로운 기능 확인해보세요
        </GuideButton>
        <BeforeGuideButton onClick={handleMoveGuide}>
          로그인하기
        </BeforeGuideButton>
      </ButtonContainer>
    </BeforeGuideContainer>
  );
}
