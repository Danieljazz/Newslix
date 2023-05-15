import { render } from "@testing-library/react";
import MainPopUp from "./MainPopUp";
import i18next from "../../i18next";
describe("Main popup", () => {
  test("Check close button visible", async () => {
    const component = render(<MainPopUp setOpenPopUp={vi.fn()} />);
    const closeButton = component.getByRole("button", { name: /Close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("Check content visible", async () => {
    const component = render(<MainPopUp setOpenPopUp={vi.fn()} />);
    const modal = component.getByTestId("modal-desc");
    const content = i18next!.getDataByLanguage("en")!.translation.homePopUp;
    expect(modal).toHaveTextContent(content);
  });
});
