import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftBar from "../../components/LeftBar/LeftBar";
import News from "../../components/News/News";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { makeRequest } from "../../makeRequest";

export type Article = {
  source: { id: string; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  content: string | null;
};

export type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[] | undefined;
};

const Country = () => {
  const { countryName } = useParams();
  const [news, setNews] = useState<NewsResponse>();
  const [showLeftBar, setShowLeftBar] = useState(
    window.matchMedia("(min-width: 808px)").matches
  );

  const { t, i18n } = useTranslation();
  const countries: [{ name: string; code: string }] = t("countries", {
    returnObjects: true,
  });
  const country = countries?.filter(
    (country) => country?.name.toLocaleLowerCase() === countryName
  );

  const countryCode = country[0]?.code.toLocaleLowerCase();
  useEffect(() => {
    makeRequest
      .get(`/news?countryCode=${countryCode}`)
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err));
  }, [countryName]);

  return (
    <>
      <div className="country-news">
        <Header showLeftBar={showLeftBar} setShowLeftBar={setShowLeftBar} />
        <div style={{ display: "flex", backgroundColor: "#415a77" }}>
          {showLeftBar && <LeftBar setShowLeftBar={setShowLeftBar} />}
          <News articles={news?.articles} />
        </div>
        <Footer count={news?.totalResults} />
      </div>
    </>
  );
};

export default Country;
