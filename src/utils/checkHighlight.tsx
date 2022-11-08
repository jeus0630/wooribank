import styled from "@emotion/styled";
import styles from "../styles";

const HighlightText = styled.span`
  margin-top: 23px;
  font-size: 26px;
  line-height: 39px;
  width: ${({ pageNumber }: { pageNumber: string }) => {
    if (pageNumber === "4") {
      return "302px";
    } else if (pageNumber === "2") {
      return "190px";
    }
    return "274px";
  }};
  color: ${styles.baseColor};
  font-weight: 600;

  span {
    font-weight: 600;
    color: ${styles.HighlightColor};
  }
`;

interface Props {
  pageNumber: string;
  contents: string;
}

export function CheckHighlight({ pageNumber, contents }: Props) {
  const findIndex = contents.split("").findIndex((item) => item === "원");

  if (pageNumber === "3") {
    const findWord = contents.split("").findIndex((item) => item === ",");
    return (
      <HighlightText pageNumber={pageNumber}>
        {contents.slice(0, findIndex)}
        <span>원</span>
        {contents.slice(findIndex + 1, findWord + 1)}
        <br />
        {contents.slice(findWord + 1)}
      </HighlightText>
    );
  }

  return (
    <HighlightText pageNumber={pageNumber}>
      {contents.slice(0, findIndex)}
      <span>원</span>
      {contents.slice(findIndex + 1)}
    </HighlightText>
  );
}
