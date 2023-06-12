import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Details } from './pages/Details';
import { Repos } from './pages/Repos';
import { Home } from './pages/Home';
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <>
  <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:login" element={<Details />} />
        <Route path="/repos/:login" element={<Repos />} />
      </Routes>
    </BrowserRouter>
  </>
)

export { App }
