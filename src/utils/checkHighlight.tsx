import styled from "@emotion/styled";
import styles from "../styles";

const HighlightText = styled.span`
  margin-top: 23px;
  font-size: 30px;
  line-height: 39px;
  width: 276px;
  color: ${styles.baseColor};

  span {
    color: ${styles.HighlightColor};
  }
`;

interface Props {
  contents: string;
}

export function CheckHighlight({ contents }: Props) {
  const findIndex = contents.split("").findIndex((item) => item === "원");
  return (
    <HighlightText>
      {contents.slice(0, findIndex)}
      <span>원</span>
      {contents.slice(findIndex + 1)}
    </HighlightText>
  );
}
