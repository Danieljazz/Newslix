import { I18nextProvider } from "react-i18next";
import Country from "./Home";
import { cleanup, render } from "@testing-library/react";
import i18next from "../../i18next";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const mockStore = configureStore([]);

describe("Home page", () => {
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

  test("Check home message", async () => {
    const component = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <BrowserRouter>
            <Country />
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
    );
    const displayedMsg = component.container.querySelector(".welcome-msg > h1");
    const expectedMsg = i18next!.getDataByLanguage("en")!.translation.homeMsg;
    expect(displayedMsg).toHaveTextContent(expectedMsg);
  });
});
