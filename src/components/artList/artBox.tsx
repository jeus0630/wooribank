import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const ArtBoxContainer = styled.div`
  width: 143px;
  height: 136px;
  border: 1px solid #e1e1e1;
  margin: 5.5px;
  padding: 4px;
  transition: 1s;
  opacity: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface Props {
  image: string;
  artIndex: number;
}

export default function ArtBox({ image, artIndex }: Props) {
  const styleRef = useRef<any>();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (artIndex === 0) {
      timeout = setTimeout(() => {
        styleRef.current.style.opacity = 1;
      }, 800);
    } else if (artIndex === 1) {
      timeout = setTimeout(() => {
        styleRef.current.style.opacity = 1;
      }, 1600);
    } else if (artIndex === 2) {
      timeout = setTimeout(() => {
        styleRef.current.style.opacity = 1;
      }, 2400);
    } else {
      timeout = setTimeout(() => {
        styleRef.current.style.opacity = 1;
      }, 3200);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ArtBoxContainer ref={styleRef}>
      <img src={image} alt="art image" />
    </ArtBoxContainer>
  );
}
