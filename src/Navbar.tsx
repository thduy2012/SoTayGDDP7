import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/gioi-thieu">Giới Thiệu</Link></li>
        <li><Link to="/dia-li">Địa Lí</Link></li>
        <li><Link to="/lich-su">Lịch Sử</Link></li>
        <li><Link to="/ca-dao">Ca Dao</Link></li>
        <li><Link to="/ca-khuc">Ca Khúc</Link></li>
        <li><Link to="/nghe-thuat">Nghệ Thuật</Link></li>
        <li><Link to="/di-san">Di Sản</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
