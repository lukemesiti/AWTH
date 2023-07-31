import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { render } from "../../utils/testUtils";
import { RequestInviteButton } from "./RequestInviteButton";
import { REQUEST_INVITE_BUTTON_ID } from ".";

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
    expect(screen.getByTestId(REQUEST_INVITE_BUTTON_ID)).toBeInTheDocument();
    expect(screen.getByText("Request an invite")).toBeInTheDocument();
  });

  it("should open the request invite modal when clicked", async () => {
    // Arrange
    render(<RequestInviteButton />);

    // Act
    await userEvent.click(screen.getByText("Request an invite"));
    // await screen.getByTestId("request-invite-form");

    // Assert
    expect(screen.getByTestId("request-invite-form")).toBeInTheDocument();
  });
});
