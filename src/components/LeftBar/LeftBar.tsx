import "./leftBar.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

type LeftBarProps = {
  setShowLeftBar: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const LeftBar = ({ setShowLeftBar }: LeftBarProps) => {
  const { t, i18n } = useTranslation();
  const countries: [{ name: string; code: string }] = t("countries", {
    returnObjects: true,
  });
  return (
    <div className="left-bar" data-testid="left-bar">
      <ul data-testid="country-list">
        {countries.map((country) => (
          <li
            key={uuidv4()}
            onClick={() =>
              !window.matchMedia("(min-width: 808px)").matches &&
              setShowLeftBar(false)
            }
          >
            <Link to={`/country/${country.name.toLocaleLowerCase()}`}>
              <img
                src={`https://flagcdn.com/40x30/${country.code.toLowerCase()}.png`}
                alt=""
              />
              <span> {country.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LeftBar;
