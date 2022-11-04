import styled from "@emotion/styled";
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
      image: "gold1.png",
      weekContent: "1주차",
      price: "100원",
    },
    {
      image: "gold2.png",
      weekContent: "2주차",
      price: "200원",
    },
    {
      image: "gold3.png",
      weekContent: "3주차",
      price: "300원",
    },
    {
      image: "gold4.png",
      weekContent: "4주차",
      price: "400원",
    },
  ].reverse();

  return (
    <GoldContainer>
      {goldList.map(({ image, weekContent, price }) => {
        return (
          <GoldBox
            image={`/images/${image}`}
            weekContent={weekContent}
            price={price}
          />
        );
      })}
    </GoldContainer>
  );
}
