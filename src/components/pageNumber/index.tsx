import styled from "@emotion/styled";

interface Props {
  pageNumber: string;
}

const PageNumberContainer = styled.div`
  margin-top: 14px;
  font-size: 30px;
  line-height: 39px;
  color: rgb(80, 80, 80);
`;

export default function PageNumber({ pageNumber }: Props) {
  return <PageNumberContainer>{pageNumber}</PageNumberContainer>;
}
