import { I18nextProvider } from "react-i18next";
import Country from "./Country";
import { cleanup, fireEvent, render } from "@testing-library/react";
import i18next from "../../i18next";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("Country page", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        with: 1000,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    cleanup();
    store = mockStore({
      newsView: { value: false },
    });
    store.dispatch = vi.fn();
  });

  test("Test lefbar appearance ", async () => {
    const component = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <Country />
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
    );
    const leftBarButton = component.getByTestId("open-leftbar");
    expect(leftBarButton).toBeInTheDocument();
    await fireEvent.click(leftBarButton);
    const lefbar = component.getByTestId("left-bar");
    expect(lefbar).toBeInTheDocument();
    const lis = component.container.querySelectorAll(".left-bar li");
    await fireEvent.click(lis[0]);
    const newsComponent = component.container.querySelector(".news");
    expect(newsComponent).toBeInTheDocument();
  });
});
