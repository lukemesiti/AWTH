import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  REQUEST_BUTTON_TEXT,
  REQUEST_INVITE_BUTTON_TEST_ID,
  REQUEST_INVITE_FORM_TEST_ID,
} from ".";
import { render } from "../../utils/testUtils";
import { RequestInviteButton } from "./RequestInviteButton";

global.ResizeObserver = class FakeResizeObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
};

describe("RequestInviteButton", async () => {
  it("should render with text", () => {
    // Arrange

    // Act
    render(<RequestInviteButton />);

    // Assert
    expect(
      screen.getByTestId(REQUEST_INVITE_BUTTON_TEST_ID)
    ).toBeInTheDocument();
    expect(screen.getByText(REQUEST_BUTTON_TEXT)).toBeInTheDocument();
  });

  it("should open the request invite modal when clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<RequestInviteButton />);

    // Act
    await user.click(screen.getByText(REQUEST_BUTTON_TEXT));

    // Assert
    await screen.findByTestId(REQUEST_INVITE_FORM_TEST_ID).then(() => {
      expect(screen.getByTestId(REQUEST_INVITE_FORM_TEST_ID)).toBeVisible();
    });
  });
});
