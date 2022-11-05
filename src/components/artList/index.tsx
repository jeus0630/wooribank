import styled from "@emotion/styled";
import { v4 } from "uuid";
import ArtBox from "./artBox";

const ArtListContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default function ArtList() {
  const artList = ["모나리자.png", "고흐.png", "연못.png", "진주귀걸이.png"];

  return (
    <ArtListContainer>
      {artList.map((item, index) => {
        return (
          <ArtBox key={v4()} image={`/images/${item}`} artIndex={index + 0.5} />
        );
      })}
    </ArtListContainer>
  );
}
