import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import styles from "../../styles";

const ChatContainer = styled.div`
  max-width: 259px;
  background-color: ${styles.pageTopsideColor};
  padding: 10px 14px;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 9px;
  color: #fff;
  opacity: 0.2;
  transform: translateY(20px);
  transition: ${({
    pageNumber,
    chatIndex,
  }: {
    pageNumber: number;
    chatIndex: number;
  }) => {
    return pageNumber === 0 ? `${chatIndex}s` : "1s";
  }};
`;

interface Props {
  content: string;
  number: number;
  chatIndex: number;
}

export default function Chat({ content, number, chatIndex }: Props) {
  const styleRef = useRef<any>();
  const findWordIndex = content.split("").findIndex((item) => item === "?");

  useEffect(() => {
    if (number === 0) {
      styleRef.current.style.opacity = 1;
      styleRef.current.style.transform = "translateY(0px)";
    }
  }, []);

  if (findWordIndex !== -1) {
    return (
      <ChatContainer ref={styleRef} pageNumber={number} chatIndex={chatIndex}>
        {content.slice(0, findWordIndex + 1)}
        <br />
        {content.slice(findWordIndex + 1)}
      </ChatContainer>
    );
  }

  return (
    <ChatContainer ref={styleRef} pageNumber={number} chatIndex={chatIndex}>
      {content}
    </ChatContainer>
  );
}
