import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from "./skladowe/Menu";

function App() {
  return (
    <>
      <Router>
        <Menu/>
        <Route path='/'  exact />
      </Router>
    </>
  );
}

export default App;
