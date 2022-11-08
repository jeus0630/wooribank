import styled from "@emotion/styled";
import styles from "../styles";

export const TotalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 812px;
  transition: 2s;
  opacity: 0;

  .swiper .swiper-pagination-bullet {
    background-color: ${styles.baseColor};
  }
`;

export const TopContainer = styled.section`
  position: relative;
  width: 375px;
  height: 430px;
  background-color: #ffffff;
  display: flex;
  padding: 104px 25px 55px;
`;

export const BottomContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100% - 430px);
  padding: 24px;
  background-color: ${styles.mainBackgroundColor};
`;
