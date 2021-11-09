import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./header";
import MainContent from "./mainContent";
import Footer from "./footer";
import ModalWindow from "./modalWindow";
import NotFound from "./notFound";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/search" element={<MainContent />}>
        <Route path=":searchQuery" element={<MainContent />} />
      </Route>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    <ModalWindow />
  </>
);

export default App;
