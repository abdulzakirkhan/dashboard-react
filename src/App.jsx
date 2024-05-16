import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, Sidebar } from "./components/index";
import { Dashboard, Messages, Orders, Partners } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/my-partners" element={<Partners />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
