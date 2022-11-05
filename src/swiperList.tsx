import ArtList from "./components/artList";
import BasicInfo from "./components/basicInfo";
import GoldList from "./components/goldList";
import Graph from "./components/graph";
import Messenger from "./components/messenger";

export default [
  {
    topComponent: <Messenger />,
    bottomComponent: (
      <BasicInfo
        pageNumber="1"
        highlightText="전문가와 함께 원하는 금융 생활 시작해보세요"
        basicText="전문가에게 정기적으로 관리받는 재테크의 모든것"
      />
    ),
  },
  {
    topComponent: <Graph />,
    bottomComponent: (
      <BasicInfo
        pageNumber="2"
        highlightText="원하는 건물주의 꿈을 이뤄보세요"
        basicText="전문가와 함께 했을시, 3년간 누적 수익률 28%"
      />
    ),
  },
  {
    topComponent: <GoldList />,
    bottomComponent: (
      <BasicInfo
        pageNumber="3"
        highlightText="금을 원하는 당신, 안전하게 거래 해보세요"
        basicText="100원부터 시작하는 간편한 금테크"
      />
    ),
  },
  {
    topComponent: <ArtList />,
    bottomComponent: (
      <BasicInfo
        pageNumber="4"
        highlightText="특별한 재테크를 원한다면 아트테크에 투자하세요"
        basicText="나만의 큐레이터가 추천해주는 다양한 미술 작품"
      />
    ),
  },
];
