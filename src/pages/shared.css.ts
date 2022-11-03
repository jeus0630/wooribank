import styled from "@emotion/styled";
import styles from "../styles";

export const TotalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TopContainer = styled.section`
  width: 375px;
  height: 430px;
  background-color: #ffffff;
`;

export const BottomContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100% - 430px);
  padding: 24px;
  background-color: ${styles.mainBackgroundColor};
`;
