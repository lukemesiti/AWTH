import { RenderOptions, render } from "@testing-library/react";
import { rest } from "msw";
import { ReactElement } from "react";
import { AllProviders } from "./AllProviders";

export const handlers = [
  rest.post("*", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json("success"));
  }),
];

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
