import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import ShowData from "./pages/ShowData";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Titulo da pagina</h1>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/exibir" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
