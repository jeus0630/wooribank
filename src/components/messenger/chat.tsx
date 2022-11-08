import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import styles from "../../styles";

const ChatContainer = styled.div`
  width: fit-content;
  max-width: 259px;
  background-color: ${styles.pageTopsideColor};
  padding: 10px 14px;
  margin-bottom: 6px;
  font-size: 12.5px;
  line-height: 20px;
  border-radius: 9px;
  color: #fff;
  opacity: 0;
  transform: translateY(30px);
  transition: 1.5s;
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
    let timeout: NodeJS.Timeout;
    if (chatIndex === 0) {
      timeout = setTimeout(() => {
        styleRef.current.style.opacity = 1;
        styleRef.current.style.transform = "translateY(0px)";
      }, 2000);
    } else if (chatIndex === 1) {
      timeout = setTimeout(() => {
        styleRef.current.style.opacity = 1;
        styleRef.current.style.transform = "translateY(0px)";
      }, 3000);
    } else {
      timeout = setTimeout(() => {
        styleRef.current.style.opacity = 1;
        styleRef.current.style.transform = "translateY(0px)";
      }, 4000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (findWordIndex !== -1) {
    return (
      <ChatContainer ref={styleRef}>
        {content.slice(0, findWordIndex + 1)}
        <br />
        {content.slice(findWordIndex + 1)}
      </ChatContainer>
    );
  }

  return <ChatContainer ref={styleRef}>{content}</ChatContainer>;
}
