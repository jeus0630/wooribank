import styled from "@emotion/styled";
import Chat from "./chat";
import MoneyManagementbox from "./moneyManagementbox";
import { v4 } from "uuid";
import ChatCircle from "./chatCircle";
import { paginationNumberState } from "../../store";
import { useRecoilState } from "recoil";
import { useEffect, useRef } from "react";

const MessengerTotalContainer = styled.div`
  position: absolute;
  bottom: 55px;
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: 2s;
`;

const MessengerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  margin-top: 10px;
`;

const UserName = styled.div`
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;
`;

const MessengerTechBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

export default function Messenger() {
  const [number] = useRecoilState(paginationNumberState);
  const styleRef = useRef<any>();

  const chats = [
    "홍길동 고객님!",
    "재테크에 관심 있으신가요? 우리은행 전문가가 들려주는 금융이야기를 확인해보세요!",
    "내 시간을 아껴주는 전문가의 포트폴리오를 확인해보세요!",
  ];

  const managements = ["부동산테크", "금테크", "아트테크"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      styleRef.current.style.opacity = 1;
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <MessengerTotalContainer ref={styleRef}>
      <ChatCircle />
      <MessengerContainer>
        <UserName>김우리 과장</UserName>
        {chats.map((item, index) => {
          return (
            <Chat key={v4()} content={item} number={number} chatIndex={index} />
          );
        })}
        <MessengerTechBox>
          {managements.map((item) => {
            return (
              <MoneyManagementbox key={v4()} content={item} number={number} />
            );
          })}
        </MessengerTechBox>
      </MessengerContainer>
    </MessengerTotalContainer>
  );
}
