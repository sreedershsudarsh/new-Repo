import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./pages2/Routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((el) => (
            <Route key={el.id} path={el.path} element={el.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
