import React from 'react';
import './App.css';
import Mainpage from "./pages/main-page/MainPage"
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
        <Route
            path="/"
            element={<Mainpage />}
        />
    </Routes>
  );
}

