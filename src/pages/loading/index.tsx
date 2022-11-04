import styled from "@emotion/styled";
import ArtBox from "../../components/artList/artBox";
import GoldBox from "../../components/goldList/goldBox";
import Messenger from "../../components/messenger/chat";
import ChatCircle from "../../components/messenger/chatCircle";
import MoneyManagementbox from "../../components/messenger/moneyManagementbox";
import PageNumber from "../../components/pageNumber";
import styles from "../../styles";
import Expert from "../onBoarding";

const LoadingContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${styles.mainBackgroundColor};
  color: ${styles.baseColor};
`;

export default function Loading() {
  return (
    <LoadingContainer>
      {/* <ArtBox image="/images/모나리자.png" /> */}
      {/* <GoldBox image="/images/gold1.png" weekContent="1주차" price="100원" /> */}
      {/* <ChatCircle />
      <MoneyManagementbox content="부동산테크" />
      <Messenger content="매매매매맴매맴매매매매ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ" /> */}
    </LoadingContainer>
  );
}
