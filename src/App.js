import { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import TotalCases from './components/TotalCases';
const GlobalStyle = createGlobalStyle`
*{margin:0;padding:0;box-sizing:border-box; }
body{
  background-color:#dcdde1 ;


}
html{
  scroll-behavior: smooth;
  font-size: 62.5%;
}
`
const MainContainer = styled.div`
  padding: 0 2rem ;
`
function App() {
  const scroollRef = useRef(null)
  return (
    <>
      <MainContainer>
        <Header />
        <TotalCases scroollRef={scroollRef} />
        <Container scroollRef={scroollRef} />
      </MainContainer>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
