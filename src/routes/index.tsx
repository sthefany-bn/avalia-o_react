import { Routes, Route } from "react-router-dom";
import { CadastroPage, HomePage, LayoutPage } from "pages";

const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
