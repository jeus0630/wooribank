import NextMove from "../../components/nextMove";
import { BottomContainer, TopContainer, TotalContainer } from "../shared.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import swiperList from "../../swiperList";
import { v4 } from "uuid";
import { useRecoilState } from "recoil";
import { paginationNumberState } from "../../store";

export default function OnBoarding() {
  const [, setNumber] = useRecoilState(paginationNumberState);

  return (
    <TotalContainer>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".nextButton",
        }}
        pagination
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
        onSlideChange={({ activeIndex }) => setNumber(activeIndex)}
      >
        {swiperList.map(({ topComponent, bottomComponent }) => {
          return (
            <SwiperSlide
              key={v4()}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TopContainer>{topComponent}</TopContainer>
              <BottomContainer>{bottomComponent}</BottomContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <NextMove />
    </TotalContainer>
  );
}
