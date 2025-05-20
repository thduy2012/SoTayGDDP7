import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Geography from "./pages/Geography";
import History from "./pages/History";
import FolkPoetry from "./pages/FolkPoetry";
import Songs from "./pages/Songs";
import Art from "./pages/Art";
import Heritage from "./pages/Heritage";
import  "./App.css"


function App() {
  return (
    <Router>
      <Navbar />
      {/* Thêm khoảng trống trên cùng để tránh nội dung bị che */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/dia-li" element={<Geography />} />
          <Route path="/lich-su" element={<History />} />
          <Route path="/ca-dao" element={<FolkPoetry />} />
          <Route path="/ca-khuc" element={<Songs />} />
          <Route path="/nghe-thuat" element={<Art />} />
          <Route path="/di-san" element={<Heritage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
