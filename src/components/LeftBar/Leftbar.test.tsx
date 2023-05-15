import { render } from "@testing-library/react";
import LeftBar from "./LeftBar";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18next from "../../i18next";
import userEvent from "@testing-library/user-event";

describe("LeftBar", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  test("Check default countries count", () => {
    const component = render(
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <LeftBar setShowLeftBar={vi.fn()} />
        </BrowserRouter>
      </I18nextProvider>
    );
    const lis = component.container.querySelectorAll("li");
    expect(lis).toHaveLength(54);
  });

  test("Click on random country", async () => {
    const component = render(
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <LeftBar setShowLeftBar={vi.fn()} />
        </BrowserRouter>
      </I18nextProvider>
    );
    const lis = component.container.querySelectorAll("li");
    const ul = component.getByTestId("country-list");
    await userEvent.click(lis[2]);
    expect(ul).toBeInTheDocument();
  });
});
