import { render } from "@testing-library/react";
import NewsPopUp from "./NewsPopUp";
import { mockedArticles } from "../../test/mockData";
import { Article } from "../../pages/Country/Country";
import { I18nextProvider } from "react-i18next";
import i18next from "../../i18next";

describe("News popup", () => {
  test("Check content", () => {
    const article: Article = mockedArticles[0];
    const component = render(
      <I18nextProvider i18n={i18next}>
        <NewsPopUp {...article} setOpenNewsPopUp={vi.fn()} />
      </I18nextProvider>
    );
    const displayedAuthor: string | null = component.container.querySelector(
      ".news-author > span"
    )!.textContent;
    const closeButton = component.getByRole("button", { name: "Close" });
    expect(component.container).toHaveTextContent(String(displayedAuthor));
    expect(displayedAuthor).toEqual(`Created by ${mockedArticles[0].author}`);
    expect(closeButton).toBeInTheDocument();
  });

  test("Check empty content", () => {
    const article: Article = mockedArticles[1];
    const component = render(
      <I18nextProvider i18n={i18next}>
        <NewsPopUp {...article} setOpenNewsPopUp={vi.fn()} />
      </I18nextProvider>
    );
    const displayedAuthor: string | null = component.container.querySelector(
      ".news-author > span"
    )!.textContent;
    const displayedContent: string | null =
      component.container.querySelector(".content > span")!.textContent;
    const closeButton = component.getByRole("button", { name: "Close" });
    expect(component.container).toHaveTextContent(String(displayedAuthor));
    const emptyAuthor =
      i18next!.getDataByLanguage("en")!.translation.emptyAuthor;
    const emptyContent =
      i18next!.getDataByLanguage("en")!.translation.emptyContent;
    expect(displayedAuthor).toEqual(emptyAuthor);
    expect(displayedContent).toEqual(emptyContent);
    expect(closeButton).toBeInTheDocument();
  });
});
