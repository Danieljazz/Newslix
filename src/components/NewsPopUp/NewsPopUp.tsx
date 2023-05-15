import "./newsPopUp.scss";
import { Article } from "../../pages/Country/Country";
import { useTranslation } from "react-i18next";

type NewsPopUpProps = Article & {
  setOpenNewsPopUp: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const NewsPopUp = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
  setOpenNewsPopUp,
}: NewsPopUpProps) => {
  const { t } = useTranslation();
  return (
    <div className="overlay" data-testid="news-popup">
      <div className="popup-content popup-news-content">
        <div className="content">
          <span>{content ? content : t("emptyContent")}</span>
        </div>
        <div className="news-author">
          <span>
            {author ? `${t("newsPopUpAuthor")} ${author}` : t("emptyAuthor")}
          </span>
        </div>
        <div className="news-link">
          <a href={url} target="_blank">
            {t("newsPopUpLink")}
          </a>
        </div>
        <button
          onClick={() => setOpenNewsPopUp(false)}
          className="close-button"
        >
          {t("closeButton")}
        </button>
      </div>
    </div>
  );
};

export default NewsPopUp;
