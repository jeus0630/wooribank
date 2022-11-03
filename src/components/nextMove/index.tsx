import styled from "@emotion/styled";

const NextMoveContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  margin-top: 64px;
`;

const Navigation = styled.div`
  width: 90px;
  height: 10px;
  background-color: #00000054;
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100%;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  font-weight: 600;
`;

export default function NextMove() {
  return (
    <>
      <NextMoveContainer>
        <Navigation />
        <NextButton>다음</NextButton>
      </NextMoveContainer>
    </>
  );
}
