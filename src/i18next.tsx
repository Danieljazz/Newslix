import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { countries, countriesPl, countriesUa } from "./data/countries";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        homeMsg: `Welcome on Newslix - news aggregate In the headbar you can switch between list and tiles. On the left there is list of countries for which news will be fetched`,
        tiles: "Tiles",
        list: "List",
        countries: countries,
        newsPopUpAuthor: "Created by",
        newsPopUpLink: "Full article",
        homePopUp: `The biggest problem I had was writing tests using Vitest. This was my first contact with this framework, but after getting familiar with it, writing tests was a pleasure. In addition, the easy ability to add different translations using i18next delighted me with its simplicity and intuitiveness. I will definitely use this in my future projects.`,
        emptyExcerpt: "Description not available",
        emptyContent: "Content not available",
        emptyAuthor: "Author unknown",
        closeButton: "Close",
        newsCount: "Number of present news",
        dropdownView: "Select view",
        newsTitle: "News",
      },
    },
    pl: {
      translation: {
        homeMsg: `Witaj w aplikacji Newslix - najlepszym agregacie newsów. 
                W górnym pasku możesz zmieniać wygląd newsów jako listę
                lub kafelki. W lewym pasku znajduje się lista krajów,
                po klinięciu na dany kraj wyświetlone zostaną jego wiadomości.`,
        tiles: "Kafelki",
        list: "Lista",
        countries: countriesPl,
        newsPopUpAuthor: "Autorem tekstu jest",
        newsPopUpLink: "Pełny artykuł",
        homePopUp: `Największy problem miałem z napisaniem testów z wykorzystaniem Vitest. Była to moja pierwsza styczność z tym frameworkiem, jednak po zaznajomieniu się z nim pisanie testów było przyjemnością. Dodatkowo łatwa możliwość dodania róznych tłumaczeń z użyciem i18next zachwyciła mnie swoją prostotą i intuicyjnością. Z pewnością wykorzystam to w swoich przyszłych projektach`,
        emptyExcerpt: "Niestety nie ma zajawki",
        emptyContent: "Niestety nie ma skrótu artykuły",
        emptyAuthor: "Autor nieznany",
        closeButton: "Zamknij",
        newsCount: "Liczba wszystkich newsow na tej stronie to",
        dropdownView: "Widok",
        newsTitle: "Newsy",
      },
    },
    ua: {
      translation: {
        homeMsg: `Ласкаво просимо до програми Newslix - найкращого агрегатора новин.
                 У верхній панелі ви можете змінити вигляд новин у вигляді списку
                 або плитки. На панелі зліва є список країн,
                 після натискання на країну відображатимуться її новини.`,
        tiles: "Плитки",
        list: "Список",
        countries: countriesUa,
        newsPopUpAuthor: "Автор тексту",
        newsPopUpLink: "Повна стаття",
        homePopUp: `Найбільшою проблемою для мене було написання тестів за допомогою Vitest. Це був мій перший контакт з цим фреймворком. Після знайомства з ним написання тестів стало справжнім задоволенням. Крім того, можливість додавання різних перекладів за допомогою i18next порадувала мене своєю простотою та інтуїтивністю. Я неодмінно буду використовувати його у своїх майбутніх проектах`,
        emptyExcerpt: "Вибачте, немає тизера",
        emptyContent: "Вибачте, немає ярликів статей",
        emptyAuthor: "Автор невідомий",
        closeButton: "Закрити",
        newsCount: "Кількість усіх новин на цій сторінці становить",
        dropdownView: "Перегляд",
        newsTitle: "Новини",
      },
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;
