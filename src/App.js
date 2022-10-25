import "./App.css";
import styled from "styled-components";
import NikeCard from "./Components/NikeCard";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #fbbe01, #000);
`;

function App() {
  return (
    <>
      <AppContainer>
        <NikeCard />
      </AppContainer>
    </>
  );
}

export default App;
