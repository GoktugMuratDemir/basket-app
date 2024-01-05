// src/routes/index.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/DetailPage';
import NotFound404 from '../pages/NotFound404';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<About />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default AppRoutes;
