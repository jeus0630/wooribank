import styled from "@emotion/styled";
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
`;

interface Props {
  content: string;
}

export default function Chat({ content }: Props) {
  const findWordIndex = content.split("").findIndex((item) => item === "?");
  if (findWordIndex !== -1) {
    return (
      <ChatContainer>
        {content.slice(0, findWordIndex + 1)}
        <br />
        {content.slice(findWordIndex + 1)}
      </ChatContainer>
    );
  }

  return <ChatContainer>{content}</ChatContainer>;
}
