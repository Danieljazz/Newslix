import { useSelector } from "react-redux";
import "./news.scss";
import { OptionState } from "../Header/Header";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import NewsTile from "../NewsTile/NewsTile";
import { Article } from "../../pages/Country/Country";
import NewsPopUp from "../NewsPopUp/NewsPopUp";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
type ArticleType = {
  articles: Article[] | undefined;
};

const News = ({ articles }: ArticleType) => {
  const { countryName } = useParams();
  const [openNewsPopUp, setOpenNewsPopUp] = useState<boolean>(false);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const { t, i18n } = useTranslation();
  const isList: boolean = useSelector(
    (state: OptionState) => state.newsView.value
  );
  const handleActiveAcrticle = (article: Article): void => {
    setActiveArticle(article);
    setOpenNewsPopUp(true);
  };
  return (
    <div className="news">
      <h1>{t("newsTitle")}</h1>
      {articles === undefined ? (
        <h2
          style={{
            backgroundColor: "#415a77",
            width: "100vw",
            height: "100vh",
            color: "white",
          }}
        >
          Loading...
        </h2>
      ) : (
        <>
          {isList ? (
            <ul>
              {articles?.map((article: Article) => (
                <li
                  onClick={() => handleActiveAcrticle(article)}
                  key={uuidv4()}
                >
                  <span>
                    {article.title.replace(`- ${article.author}`, "")}
                  </span>
                  <div className="article-info">
                    <span>{article.source.name}</span>
                    <span>{moment(article.publishedAt).fromNow()}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="tiles">
              {articles?.map((article) => (
                <div
                  onClick={() => handleActiveAcrticle(article)}
                  key={uuidv4()}
                  data-testid="news-tile"
                >
                  <NewsTile {...article} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <div>{isList}</div>
      {openNewsPopUp && activeArticle && (
        <NewsPopUp {...activeArticle} setOpenNewsPopUp={setOpenNewsPopUp} />
      )}
    </div>
  );
};
export default News;
