// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function Layout() {
  return (
    <div className="container" style={{ width: "100%", maxWidth: "1900px", margin: "0 auto" }}>
      <Header />   {/* Header shu yerda chiqadi */}
      <Outlet />   {/* Bu yerga Route elementlari render bo'ladi */}
    </div>
  );
}

export default Layout;
