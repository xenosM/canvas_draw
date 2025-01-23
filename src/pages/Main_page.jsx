import Toolbar from "../components/Toolbar";
import Canvas from "../components/Canvas";
import ContextProvider from "../Contexts/ContextProvider";
// import { createContext, useState } from "react";

const MainPage = function () {

  return (
    <main id="main-section">
      <ContextProvider>
          <Toolbar />
          <Canvas />
      </ContextProvider>
    </main>
  );
};
export default MainPage;
