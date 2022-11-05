import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const ArtBoxContainer = styled.div`
  width: 143px;
  height: 136px;
  border: 1px solid #e1e1e1;
  margin: 5.5px;
  padding: 4px;
  transition: ${({ artIndex }: { artIndex: number }) => {
    return `${artIndex}s`;
  }};
  opacity: 0.1;

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
    styleRef.current.style.opacity = 1;
  }, []);

  return (
    <ArtBoxContainer ref={styleRef} artIndex={artIndex}>
      <img src={image} alt="art image" />
    </ArtBoxContainer>
  );
}
