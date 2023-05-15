import "./newsTile.scss";
import { Article } from "../../pages/Country/Country";
import "dayjs/locale/pl";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTranslation } from "react-i18next";
const NewsTile = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}: Article) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const daysago = (postDate: Date) => {
    dayjs.extend(relativeTime).locale(lang);
    var fromNowOn = dayjs(postDate).fromNow();
    return fromNowOn;
  };
  return (
    <div className="news-tile">
      <h3>{title.replace(`- ${author}`, "")}</h3>
      {urlToImage ? (
        <img src={urlToImage} />
      ) : (
        <img
          className="news-img-placeholder"
          src={"https://cdn-icons-png.flaticon.com/512/2537/2537926.png"}
        />
      )}

      <span>{description ? description : t("emptyExcerpt")}</span>
      <div className="article-info">
        <span>{source.name}</span>
        <span>{daysago(publishedAt)}</span>
      </div>
    </div>
  );
};
export default NewsTile;
