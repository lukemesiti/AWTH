import { describe, expect, it } from "vitest";
import { BUIModal } from ".";
import { render } from "../utils/testUtils";

describe("BUIModal", () => {
  it("should render with title and children components", () => {
    // Arrange
    const title = "Modal title";
    const isOpen = false;
    const handleClose = () => {};

    // Act
    const result = render(
      <BUIModal title={title} isOpen={isOpen} handleClose={handleClose} />
    );

    // Assert
    expect(result).toMatchSnapshot();
  });
});
