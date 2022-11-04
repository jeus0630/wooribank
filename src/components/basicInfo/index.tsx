import styled from "@emotion/styled";
import { CheckHighlight } from "../../utils/checkHighlight";
import PageNumber from "../pageNumber";

const BasicText = styled.span`
  width: 308px;
  margin-top: 18px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.52);
`;

interface Props {
  pageNumber: string;
  highlightText: string;
  basicText: string;
}

export default function BasicInfo({
  pageNumber,
  highlightText,
  basicText,
}: Props) {
  return (
    <>
      <PageNumber pageNumber={pageNumber} />
      <CheckHighlight pageNumber={pageNumber} contents={highlightText} />
      <BasicText>{basicText}</BasicText>
    </>
  );
}
