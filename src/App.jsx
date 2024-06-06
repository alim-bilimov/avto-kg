import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Home from "./pages/home/index";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
