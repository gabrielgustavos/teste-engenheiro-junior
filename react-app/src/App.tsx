import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import ClientList from "./features/Clients";
import ProductList from "./features/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/clientes" element={<ClientList />} />
        <Route path="/produtos" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
