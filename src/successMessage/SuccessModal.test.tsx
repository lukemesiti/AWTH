import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SUCCESS_MODAL_TEST_ID, SuccessModal } from ".";
import { ModalDisplayContext, State } from "../context";

global.ResizeObserver = class FakeResizeObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
};

function renderSuccessModal() {
  const state: State = {
    modal: "success",
    setModal: () => {},
  };

  return render(
    <ModalDisplayContext.Provider value={state}>
      <SuccessModal />
    </ModalDisplayContext.Provider>
  );
}

describe("SuccessModal", () => {
  it("should render", async () => {
    // Arrange

    // Act
    renderSuccessModal();

    // Assert
    expect(
      await screen.findByTestId(SUCCESS_MODAL_TEST_ID)
    ).toBeInTheDocument();
  });
});
