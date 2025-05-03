import { BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Menu />
    </BrowserRouter>
  );
}

export default App
