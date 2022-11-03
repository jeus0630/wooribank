import styled from "@emotion/styled";
import styles from "../../styles";

const ChatContainer = styled.div`
  max-width: 259px;
  background-color: ${styles.pageTopsideColor};
  padding: 12px 14px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 9px;
  color: #fff;
`;

interface Props {
  content: string;
}

export default function Chat({ content }: Props) {
  return <ChatContainer>{content}</ChatContainer>;
}
