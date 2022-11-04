import styled from "@emotion/styled";

const ArtBoxContainer = styled.div`
  width: 143px;
  height: 136px;
  border: 1px solid #e1e1e1;
  margin: 5.5px;
  padding: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface Props {
  image: string;
}

export default function ArtBox({ image }: Props) {
  return (
    <ArtBoxContainer>
      <img src={image} alt="art image" />
    </ArtBoxContainer>
  );
}
