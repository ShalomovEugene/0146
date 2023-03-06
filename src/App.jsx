import React from 'react';
import Header from './components/Header';
import {ThemeProvider} from "styled-components";
import {theme} from "./theme"
import {Wrapper} from './App.styles'
import Main from './components/Main';



const  App = () => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Header  />
        <Main/>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
