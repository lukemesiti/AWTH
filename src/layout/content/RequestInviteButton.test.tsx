import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { render } from "../../utils/testUtils";
import { RequestInviteButton } from "./RequestInviteButton";
import { REQUEST_INVITE_BUTTON_TEST_ID, REQUEST_INVITE_FORM_TEST_ID } from ".";

global.ResizeObserver = class FakeResizeObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
};

describe("RequestInviteButton", () => {
  it("should render with text", () => {
    // Arrange

    // Act
    render(<RequestInviteButton />);

    // Assert
    expect(
      screen.getByTestId(REQUEST_INVITE_BUTTON_TEST_ID)
    ).toBeInTheDocument();
    expect(screen.getByText("Request an invite")).toBeInTheDocument();
  });

  it("should open the request invite modal when clicked", async () => {
    // Arrange
    render(<RequestInviteButton />);

    // Act
    await userEvent.click(screen.getByText("Request an invite"));

    // Assert
    expect(screen.getByTestId(REQUEST_INVITE_FORM_TEST_ID)).toBeInTheDocument();
  });
});
