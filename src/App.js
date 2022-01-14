import Header from "./Components/Header";
import React from "react";
import MainPage from "./MainPage";
import CharacterPage from "./CharacterPage";
import ComicPage from "./ComicPage";
import ComicsPage from "./ComicsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/comic" element={<ComicPage />} />
        <Route path="/comics" element={<ComicsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
