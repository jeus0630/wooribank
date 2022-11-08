import styled from "@emotion/styled";
import { v4 } from "uuid";
import GoldBox from "./goldBox";

const GoldContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 9px;
`;

export default function GoldList() {
  const goldList = [
    {
      image: "gold4.png",
      weekContent: "4주차",
      price: "400원",
    },
    {
      image: "gold3.png",
      weekContent: "3주차",
      price: "300원",
    },
    {
      image: "gold2.png",
      weekContent: "2주차",
      price: "200원",
    },
    {
      image: "gold1.png",
      weekContent: "1주차",
      price: "100원",
    },
  ];

  return (
    <GoldContainer>
      {goldList.map(({ image, weekContent, price }, index) => {
        return (
          <GoldBox
            key={v4()}
            boxIndex={index}
            image={`/images/${image}`}
            weekContent={weekContent}
            price={price}
          />
        );
      })}
    </GoldContainer>
  );
}
