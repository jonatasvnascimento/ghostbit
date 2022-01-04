import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../src/page/Main/Main';
import Contato from '../src/page/Contato/Contato';

export default function RouteMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="expenses" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
