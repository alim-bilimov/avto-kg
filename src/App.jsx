import "./App.scss";
import Header from "./components/header";
import Home from "./pages/home/index";
import MainRoute from "./routes/mainRoute";

function App() {
  return (
    <>
      <Header />
      <Home />
      <MainRoute />
    </>
  );
}

export default App;
