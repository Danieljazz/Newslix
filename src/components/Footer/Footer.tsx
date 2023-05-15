import { useTranslation } from "react-i18next";
import "./footer.scss";
import { useEffect, useState } from "react";

type NewsCount = {
  count?: number | undefined;
};

const Footer = ({ count = undefined }: NewsCount) => {
  const [time, setTime] = useState<string>();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString(i18n.language));
    }, 1000);
  }, []);

  return (
    <div className="footer">
      {count && (
        <span data-testid="news-count-description">
          {t("newsCount")}: {count}
        </span>
      )}
      <span>{time}</span>
    </div>
  );
};
export default Footer;
