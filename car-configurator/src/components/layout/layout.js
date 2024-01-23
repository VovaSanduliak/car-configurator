import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = () => {
  return (
    <>
      <Header />

      <main style={{ marginTop: "2em" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
