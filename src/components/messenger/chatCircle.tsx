import styled from "@emotion/styled";

const ChatCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function ChatCircle() {
  return (
    <ChatCircleContainer>
      <img src="/images/kimwoori.png" alt="김우리 과장님" />
    </ChatCircleContainer>
  );
}
