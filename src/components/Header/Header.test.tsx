import { render, cleanup } from "@testing-library/react";
import Header from "./Header";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import i18next from "../../i18next";
import { I18nextProvider } from "react-i18next";
const mockStore = configureStore([]);

describe("Header", () => {
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    cleanup();
    store = mockStore({
      newsView: { value: false },
    });
    store.dispatch = vi.fn();
  });

  test("Default language", async () => {
    let { getByTestId } = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <Header showLeftBar={false} setShowLeftBar={vi.fn()} />
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
    );
    expect(getByTestId("list-tile-switch")).toHaveTextContent("Tiles");
    expect(getByTestId("list-tile-switch")).toHaveTextContent("List");
  });

  test("Default language change to pl", async () => {
    let { getByTestId } = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <Header showLeftBar={false} setShowLeftBar={vi.fn()} />
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
    );
    await userEvent.selectOptions(getByTestId("language-selector"), "pl");
    expect(getByTestId("list-tile-switch")).toHaveTextContent("Kafelki");
    expect(getByTestId("list-tile-switch")).toHaveTextContent("Lista");
  });
});
