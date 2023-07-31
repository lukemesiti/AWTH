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
import { FormFieldNames } from "./types";

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
    // await screen.getByTestId("request-invite-form");

    // Assert
    expect(screen.getByTestId(FormFieldNames.Name)).toBeInTheDocument();
    expect(screen.getByTestId(FormFieldNames.Email)).toBeInTheDocument();
    expect(screen.getByTestId(FormFieldNames.ConfirmEmail)).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
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
    const submitButton = screen.getByTestId("submit-button");

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
    const submitButton = screen.getByTestId("submit-button");
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
    expect(screen.getByTestId("success-modal")).toBeInTheDocument();
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
    const submitButton = screen.getByTestId("submit-button");
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
    expect(await screen.getByTestId("server-error")).toBeInTheDocument();
  });
});
