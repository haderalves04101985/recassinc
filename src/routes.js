import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormCad from './pages/FormCad';
import Treinos from './pages/Treinos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Treinos />} />
      <Route path="cadastro" element={<FormCad />} />
      <Route path="cadastro/:id" element={<FormCad />} />
    </Routes>
  );
};

export default AppRoutes;
