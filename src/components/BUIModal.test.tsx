import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BUIModal } from ".";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

global.ResizeObserver = class FakeResizeObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
};

const testModalId = "test-modal";
const openModalButton = "Open modal";

const TestModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{openModalButton}</button>
      <BUIModal
        title="Modal title"
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        testId={testModalId}
      >
        <div>modal content</div>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </BUIModal>
    </>
  );
};

describe("BUIModal", () => {
  it("should render with title and children components", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<TestModal />);

    // Act
    await user.click(screen.getByText(openModalButton));

    // Assert
    expect(screen.getByTestId(testModalId)).toBeVisible();
    expect(screen.getByTestId(testModalId)).toMatchSnapshot();
  });
});
