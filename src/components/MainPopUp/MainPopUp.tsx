import { useTranslation } from "react-i18next";
import "./mainPopUp.scss";

type OpenPopUp = {
  setOpenPopUp: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const MainPopUp = ({ setOpenPopUp }: OpenPopUp) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="overlay">
      <div className="popup-content">
        <h2>Popup</h2>
        <button className="close-button" onClick={() => setOpenPopUp(false)}>
          {t("closeButton")}
        </button>
        <span data-testid="modal-desc">{t("homePopUp")}</span>
      </div>
    </div>
  );
};
export default MainPopUp;
