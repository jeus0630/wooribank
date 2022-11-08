import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import "./App.css";
import BeforeGuide from "./pages/beforeGuide";
import Splash from "./pages/splash";

const AppContainer = styled.div`
  width: 100%;
  height: 812px;
  overflow: hidden;
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AppContainer>
      {loading ? (
        <Splash />
      ) : (
        <BeforeGuide loading={loading} setLoading={setLoading} />
      )}
    </AppContainer>
  );
}

export default App;
