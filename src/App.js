import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { GlobalProvider } from "./components/Globlal";
import EntryPage from "./routes/entry.routes";
import LoginPage from "./routes/login.routes";
import RegisterPage from "./routes/register.routes";

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/signup" element={<RegisterPage/>}/>
            <Route path="/entry/:type" element={<EntryPage/>}/>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </AppStyle>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway';
  }
`
const AppStyle = styled.div`
  background-color: #8C11BE;
  height: 100vh;
  width: 100vw;
`