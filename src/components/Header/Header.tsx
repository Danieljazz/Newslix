import { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../../redux/newsOptionSlice";
import MainPopUp from "../MainPopUp/MainPopUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
export interface OptionState {
  newsView: { value: boolean };
}

export type HeaderProps = {
  showLeftBar: boolean;
  setShowLeftBar: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const Header = ({ showLeftBar, setShowLeftBar }: HeaderProps) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isList: boolean = useSelector(
    (state: OptionState): boolean => state.newsView.value
  );
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const [lang, setLang] = useState(localStorage.getItem("lng") || "en");
  const changeLang = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    const lang = target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
    setLang(lang);
  };

  return (
    <div className="header">
      <button
        className="menu"
        onClick={() => {
          setShowLeftBar((prev) => !prev);
        }}
        data-testid="open-leftbar"
      >
        {showLeftBar ? (
          <CloseIcon style={{ fontSize: "12px" }} />
        ) : (
          <MenuIcon style={{ fontSize: "12px" }} />
        )}
      </button>

      <Link to="/">
        <span>gnNews</span>
      </Link>
      <div className="list-tile" data-testid="list-tile-switch">
        <span>{t("tiles")}</span>
        <div className="view-switch">
          <ReactSwitch
            checked={isList}
            onChange={() => dispatch(changeView(!isList))}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
        <span>{t("list")}</span>
      </div>
      <div className="dropdown">
        <span>{t("dropdownView")}</span>
        <select
          onChange={(e) => {
            e.target.value !== "Tile"
              ? dispatch(changeView(true))
              : dispatch(changeView(false));
          }}
        >
          <option value={"Tile"}>{t("tiles")}</option>
          <option value={"List"}>{t("list")}</option>
        </select>
      </div>
      <button onClick={() => setOpenPopUp(true)}>PopUp</button>
      {openPopUp && <MainPopUp setOpenPopUp={setOpenPopUp} />}
      <select
        onChange={changeLang}
        defaultValue={lang}
        data-testid="language-selector"
      >
        <option value="en">EN</option>
        <option value="pl">PL</option>
        <option value="ua">UA</option>
      </select>
    </div>
  );
};
export default Header;
