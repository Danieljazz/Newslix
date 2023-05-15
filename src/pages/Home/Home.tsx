import "./home.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LeftBar from "../../components/LeftBar/LeftBar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Home = () => {
  const [showLeftBar, setShowLeftBar] = useState(
    window.matchMedia("(min-width: 808px)").matches
  );
  const { t, i18n } = useTranslation();
  return (
    <div className="home">
      <Header showLeftBar={showLeftBar} setShowLeftBar={setShowLeftBar} />
      <div style={{ display: "flex" }}>
        {showLeftBar && <LeftBar setShowLeftBar={setShowLeftBar} />}
        <div className="welcome-msg">
          <h1>{t("homeMsg")}</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
