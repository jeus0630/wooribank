import styled from "@emotion/styled";
import { useSwiper } from "swiper/react";

const NextMoveContainer = styled.section`
  position: absolute;
  bottom: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 325px;
  height: 56px;
  left: 25px;
  z-index: 10;
`;

const Navigation = styled.div`
  width: 90px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0);
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100%;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export default function NextMove() {
  return (
    <NextMoveContainer>
      <Navigation />
      <NextButton className="nextButton">다음</NextButton>
    </NextMoveContainer>
  );
}
