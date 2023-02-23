import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import AddOuvrage from "./Components/Pages/AddOuvrage";
import EditOuvrage from "./Components/Pages/EditOuvrage";
import ListOuvrage from "./Components/Pages/ListOuvrage";
import MAJ from "./Components/Pages/MAJ";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="main">
        <Sidebar />

        <Routes>
          <Route exact path="/" element={<ListOuvrage />} />
          <Route path="/add-ouvrage" element={<AddOuvrage />} />
          <Route path="/edit-ouvrage/:id" element={<EditOuvrage />} />
          <Route path="/mod-sup-fil" element={<MAJ />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
