import { I18nextProvider } from "react-i18next";
import { Article } from "../../pages/Country/Country";
import NewsTile from "./NewsTile";
import { render } from "@testing-library/react";
import i18next from "../../i18next";
import { mockedArticles } from "../../test/mockData";

describe("News tile", () => {
  test("Check tile content", () => {
    const article: Article = mockedArticles[0];
    const component = render(
      <I18nextProvider i18n={i18next}>
        <NewsTile {...article} />
      </I18nextProvider>
    );
    const displayedTitle: string | null =
      component.container.querySelector(".news-tile > h3")!.textContent;
    const displayedDesc: string | null =
      component.container.querySelector(".news-tile > span")!.textContent;
    const displayedSource: string | null = component.container.querySelectorAll(
      ".article-info > span"
    )[0]!.textContent;
    expect(component.container).toHaveTextContent(String(displayedTitle));
    expect(displayedTitle).toEqual(
      `${article.title.replace(`- ${article.author}`, "")}`
    );
    expect(component.container).toHaveTextContent(String(displayedDesc));
    expect(displayedDesc).toEqual(`${article.description}`);
    expect(component.container).toHaveTextContent(String(displayedSource));
    expect(displayedSource).toEqual(`${article.source.name}`);
  });

  test("Check tile content empty description", () => {
    const article: Article = mockedArticles[1];
    const component = render(
      <I18nextProvider i18n={i18next}>
        <NewsTile {...article} />
      </I18nextProvider>
    );
    const displayedTitle: string | null =
      component.container.querySelector(".news-tile > h3")!.textContent;
    const displayedDesc: string | null =
      component.container.querySelector(".news-tile > span")!.textContent;
    const displayedSource: string | null = component.container.querySelectorAll(
      ".article-info > span"
    )[0]!.textContent;
    expect(component.container).toHaveTextContent(String(displayedTitle));
    expect(displayedTitle).toEqual(
      `${article.title.replace(`- ${article.author}`, "")}`
    );
    expect(component.container).toHaveTextContent(String(displayedDesc));
    expect(displayedDesc).toEqual("Description not available");
    expect(component.container).toHaveTextContent(String(displayedSource));
    expect(displayedSource).toEqual(`${article.source.name}`);
  });
});
