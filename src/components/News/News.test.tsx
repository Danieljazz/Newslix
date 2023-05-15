import { cleanup, fireEvent, render } from "@testing-library/react";
import News from "./News";
import { mockedArticles } from "../../test/mockData";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureStore([]);

describe("News panel", () => {
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    cleanup();
    store = mockStore({
      newsView: { value: true },
    });
  });

  test("Check news list", () => {
    const component = render(
      <Provider store={store}>
        <News articles={mockedArticles} />
      </Provider>
    );
    const lis = component.container.querySelectorAll("li");
    expect(lis).toHaveLength(mockedArticles.length);
  });

  test("Check news tiles", () => {
    store = mockStore({
      newsView: { value: false },
    });
    const component = render(
      <Provider store={store}>
        <News articles={mockedArticles} />
      </Provider>
    );
    const tiles = component.getAllByTestId("news-tile");
    expect(tiles).toHaveLength(mockedArticles.length);
  });

  test("Check news popup", async () => {
    const component = render(
      <Provider store={store}>
        <News articles={mockedArticles} />
      </Provider>
    );
    const lis = component.container.querySelectorAll("li");
    await fireEvent.click(lis[2]);
    const popup = component.getByTestId("news-popup");
    expect(popup).toBeInTheDocument();
  });
});
