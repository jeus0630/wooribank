import styled from "@emotion/styled";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import GraphSVG from "./graphSvg";

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const GraphCenterTextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 62px;
`;

const GraphCenterValue = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
`;

const GraphCenterPrice = styled.span`
  margin-top: 11px;
  font-size: 40px;
`;

const GraphInfoContainer = styled.div`
  position: absolute;
  top: 75px;
  left: 24px;
  display: flex;
  flex-direction: column;
`;

const GraphInfoBuilding = styled.span`
  margin-bottom: 12px;
  font-size: 16px;
`;

const GraphInfoPrice = styled.span`
  font-size: 36px;
`;

const GraphInfoRise = styled.span`
  display: flex;
  align-items: center;
  color: #dc3c2c;
  font-size: 12px;
`;

const ArrowUp = styled(ArrowDropUpIcon)`
  transform: scale(1.3) scaleY(1.3);
`;

export default function Graph() {
  return (
    <GraphContainer>
      <GraphInfoContainer>
        <GraphInfoBuilding>우리빌딩</GraphInfoBuilding>
        <GraphInfoPrice>52,350</GraphInfoPrice>
        <GraphInfoRise>
          <ArrowUp />
          2,150원 (+28%)
        </GraphInfoRise>
      </GraphInfoContainer>
      <GraphSVG />
      <GraphCenterTextContainer>
        <GraphCenterValue>우리 건물의 가치</GraphCenterValue>
        <GraphCenterPrice>+ 520,000원</GraphCenterPrice>
      </GraphCenterTextContainer>
    </GraphContainer>
  );
}
