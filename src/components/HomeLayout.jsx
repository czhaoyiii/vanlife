import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

export default function HomeLayout({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="website">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
      <Footer />
    </div>
  );
}
