import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { describe, expect, it } from "vitest";
import { RequestInviteButton } from "../layout/content/RequestInviteButton";
import { server } from "../utils/testSetup";
import { render } from "../utils/testUtils";
import {
  FormFieldNames,
  SERVER_ERROR_TEST_ID,
  SUBMIT_BUTTON_TEST_ID,
} from "./types";
import { SUCCESS_MODAL_TEST_ID } from "../successMessage";

global.ResizeObserver = class FakeResizeObserver {
  observe() {}
  disconnect() {}
  unobserve() {}
};

describe("RequestInviteForm", () => {
  it("should show form with name, email, confirm email fields and submit button. No errors shown", async () => {
    // Arrange
    render(<RequestInviteButton />);

    // Act
    await userEvent.click(screen.getByText("Request an invite"));

    // Assert
    expect(screen.getByTestId(FormFieldNames.Name)).toBeInTheDocument();
    expect(screen.getByTestId(FormFieldNames.Email)).toBeInTheDocument();
    expect(screen.getByTestId(FormFieldNames.ConfirmEmail)).toBeInTheDocument();
    expect(screen.getByTestId(SUBMIT_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(
      screen.queryByTestId(`${FormFieldNames.Name}-error`)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId(`${FormFieldNames.Email}-error`)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId(`${FormFieldNames.ConfirmEmail}-error`)
    ).not.toBeInTheDocument();
  });

  it("should display validation errors when form is invalid and submit button is clicked", async () => {
    // Arrange
    render(<RequestInviteButton />);
    await userEvent.click(screen.getByText("Request an invite"));
    const nameInput = screen.getByTestId(FormFieldNames.Name);
    const emailInput = screen.getByTestId(FormFieldNames.Email);
    const confirmEmailInput = screen.getByTestId(FormFieldNames.ConfirmEmail);
    const submitButton = screen.getByTestId(SUBMIT_BUTTON_TEST_ID);

    // Act
    fireEvent.change(nameInput, { target: { value: "n" } });
    fireEvent.change(emailInput, { target: { value: "email@test" } });
    fireEvent.change(confirmEmailInput, { target: { value: "confirm@test" } });
    await userEvent.click(submitButton);

    // Assert
    expect(
      screen.getByTestId(`${FormFieldNames.Name}-error`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`${FormFieldNames.Email}-error`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`${FormFieldNames.ConfirmEmail}-error`)
    ).toBeInTheDocument();
  });

  it("should be in a success state when network request is successful", async () => {
    // Arrange
    render(<RequestInviteButton />);
    await userEvent.click(screen.getByText("Request an invite"));
    const submitButton = screen.getByTestId(SUBMIT_BUTTON_TEST_ID);
    const nameInput = screen.getByTestId(FormFieldNames.Name);
    const emailInput = screen.getByTestId(FormFieldNames.Email);
    const confirmEmailInput = screen.getByTestId(FormFieldNames.ConfirmEmail);
    const email = "test@email.com";

    // Act
    fireEvent.change(nameInput, { target: { value: "name" } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(confirmEmailInput, {
      target: { value: email },
    });
    await userEvent.click(submitButton);
    await waitForElementToBeRemoved(submitButton);

    // Assert
    expect(screen.getByTestId(SUCCESS_MODAL_TEST_ID)).toBeInTheDocument();
    expect(submitButton).not.toBeInTheDocument();
  });

  it("should be in a fail state when network request is unsuccessful", async () => {
    // Arrange
    server.use(
      rest.post("*", (_, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.json({ errorMessage: "request failed message" })
        );
      })
    );

    render(<RequestInviteButton />);
    await userEvent.click(screen.getByText("Request an invite"));
    const submitButton = screen.getByTestId(SUBMIT_BUTTON_TEST_ID);
    const nameInput = screen.getByTestId(FormFieldNames.Name);
    const emailInput = screen.getByTestId(FormFieldNames.Email);
    const confirmEmailInput = screen.getByTestId(FormFieldNames.ConfirmEmail);
    const email = "usedemail@airwallex.com";

    // Act
    fireEvent.change(nameInput, { target: { value: "name" } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(confirmEmailInput, {
      target: { value: email },
    });
    await userEvent.click(submitButton);

    // Assert
    expect(screen.getByTestId(SERVER_ERROR_TEST_ID)).toBeInTheDocument();
  });
});
