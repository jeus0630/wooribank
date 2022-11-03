import BasicInfo from "../../components/basicInfo";
import NextMove from "../../components/nextMove";
import { BottomContainer, TopContainer, TotalContainer } from "../shared.css";

export default function OnBoarding() {
  return (
    <TotalContainer>
      <TopContainer></TopContainer>
      <BottomContainer>
        <>
          <BasicInfo
            pageNumber="1"
            highlightText="전문가와 함께 원하는 금융 생활 시작해보세요"
            basicText="전문가에게 정기적으로 관리받는 재테크의 모든것"
          />
        </>
        <NextMove />
      </BottomContainer>
    </TotalContainer>
  );
}
