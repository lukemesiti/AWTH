import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SuccessModal } from ".";
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
    expect(await screen.findByTestId("success-modal")).toBeInTheDocument();
  });
});
