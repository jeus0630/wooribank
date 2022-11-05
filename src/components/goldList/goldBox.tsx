import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const GoldBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 271px;
  height: 57px;
  padding: 25px 20px;
  background-color: rgb(247, 247, 247);
  border-radius: 12px;
  margin-bottom: 12px;
  transition: ${({ boxIndex }: { boxIndex: number }) => {
    if (boxIndex === 0) {
      return "1.6s";
    } else if (boxIndex === 1) {
      return "1.3s";
    } else if (boxIndex === 2) {
      return "1s";
    } else if (boxIndex === 3) {
      return "0.7s";
    }
    return "0.2s";
  }};
  transform: translateY(20px);
  opacity: 0.2;
`;

const PriceText = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;
  color: #163b7c;
`;

const GoldAndWeeks = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 29px;
    height: 100%;
    margin-right: 13px;
    object-fit: cover;
  }
`;

const GoldAndWeeksTexet = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.8px;
  color: #000;
`;

interface Props {
  boxIndex: number;
  image: string;
  weekContent: string;
  price: string;
}

export default function GoldBox({
  boxIndex,
  image,
  weekContent,
  price,
}: Props) {
  const styleRef = useRef<any>();

  useEffect(() => {
    styleRef.current.style.opacity = 1;
    styleRef.current.style.transform = "translateY(0px)";
  }, []);

  return (
    <GoldBoxContainer ref={styleRef} boxIndex={boxIndex}>
      <GoldAndWeeks>
        <img src={image} alt={image} />
        <GoldAndWeeksTexet>{weekContent}</GoldAndWeeksTexet>
      </GoldAndWeeks>
      <PriceText>{price}</PriceText>
    </GoldBoxContainer>
  );
}
