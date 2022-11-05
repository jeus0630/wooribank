import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const MoneyManagementboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ content }: { content: string }) => {
    if (content === "금테크") {
      return "59px";
    } else if (content === "아트테크") {
      return "69px";
    }
    return "80px";
  }};
  height: 35px;
  margin-right: 7px;
  border: 1px solid rgba(0, 0, 0, 10%);
  font-size: 12px;
  border-radius: 9px;
  color: #000;
  background-color: #fff;
  transform: translateY(20px);
  opacity: 0;
  transition: 2.5s;
`;

interface Props {
  content: string;
  number: number;
}

export default function MoneyManagementbox({ content, number }: Props) {
  const styleRef = useRef<any>();

  useEffect(() => {
    if (number === 0) {
      styleRef.current.style.opacity = 1;
      styleRef.current.style.transform = "translateY(0px)";
    }
  }, []);

  return (
    <MoneyManagementboxContainer ref={styleRef} content={content}>
      {content}
    </MoneyManagementboxContainer>
  );
}
