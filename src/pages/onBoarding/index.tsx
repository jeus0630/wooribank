import BasicInfo from "../../components/basicInfo";
import NextMove from "../../components/nextMove";
import { BottomContainer, TopContainer, TotalContainer } from "../shared.css";
import Messenger from "../../components/messenger";
import Graph from "../../components/graph";
import GoldList from "../../components/goldList";
import ArtBox from "../../components/artList/artBox";
import ArtList from "../../components/artList";
import { Swiper, SwiperSlide } from "swiper/react";

export default function OnBoarding() {
  return (
    <TotalContainer>
      <TopContainer>
        <Messenger />
        {/* <Graph /> */}
        {/* <GoldList /> */}
        {/* <ArtList /> */}
      </TopContainer>
      <BottomContainer>
        <Swiper
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          <SwiperSlide
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <BasicInfo
              pageNumber="3"
              highlightText="금을 원하는 당신, 안전하게 거래 해보세요"
              basicText="전문가에게 정기적으로 관리받는 재테크의 모든것"
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </BottomContainer>
      <NextMove />
    </TotalContainer>
  );
}
