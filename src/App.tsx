import React, {Fragment} from 'react';
import './App.css';
import {Footer, Sections, Header} from "./Components/index"


const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Sections />
      <Footer />
    </ Fragment>
  );
}

export default App;
