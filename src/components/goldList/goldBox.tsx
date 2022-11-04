import styled from "@emotion/styled";

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

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 19.2px;
    color: #163b7c;
  }
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

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 16.8px;
    color: #000;
  }
`;

interface Props {
  image: string;
  weekContent: string;
  price: string;
}

export default function GoldBox({ image, weekContent, price }: Props) {
  return (
    <GoldBoxContainer>
      <GoldAndWeeks>
        <img src={image} alt={image} />
        <span>{weekContent}</span>
      </GoldAndWeeks>
      <span>{price}</span>
    </GoldBoxContainer>
  );
}
