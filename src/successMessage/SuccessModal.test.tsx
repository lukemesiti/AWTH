import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SUCCESS_BUTTON_TEST_ID, SUCCESS_MODAL_TEST_ID, SuccessModal } from ".";
import { ModalDisplayProvider } from "../context";

global.ResizeObserver = class FakeResizeObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
};

describe("SuccessModal", () => {
  it("should render and close with button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();

    // Act
    render(
      <ModalDisplayProvider initialState="success">
        <SuccessModal />
      </ModalDisplayProvider>
    );

    // Assert
    const successModal = await screen.findByTestId(SUCCESS_MODAL_TEST_ID);
    expect(successModal).toBeVisible();

    // Act
    const button = screen.getByTestId(SUCCESS_BUTTON_TEST_ID);
    await user.click(button);

    // Assert
    expect(successModal).not.toBeVisible();
  });
});
