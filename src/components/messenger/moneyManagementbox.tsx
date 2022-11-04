import styled from "@emotion/styled";

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
`;

interface Props {
  content: string;
}

export default function MoneyManagementbox({ content }: Props) {
  return (
    <MoneyManagementboxContainer content={content}>
      {content}
    </MoneyManagementboxContainer>
  );
}
