import { cleanup, render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  beforeEach(() => {
    cleanup();
  });
  test("Empty news count on Home page", () => {
    render(<Footer />);
    const newsDesc = screen.queryByTestId("news-count-description");
    expect(newsDesc).toBeNull();
  });

  test("Props count view", () => {
    const randomNumber = Math.random() * 100;
    const { getByTestId } = render(<Footer count={randomNumber} />);
    expect(getByTestId("news-count-description")).toHaveTextContent(
      String(randomNumber)
    );
  });
});
