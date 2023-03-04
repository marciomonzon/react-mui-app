import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import SignInSide from '../pages/login';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<SignInSide />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};