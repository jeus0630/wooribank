import styled from "@emotion/styled";
import "./App.css";
import OnBoarding from "./pages/onBoarding";

const AppContainer = styled.div`
  width: 375px;
  height: 812px;
  overflow: hidden;
`;

function App() {
  return (
    <AppContainer>
      <OnBoarding />
    </AppContainer>
  );
}

export default App;
