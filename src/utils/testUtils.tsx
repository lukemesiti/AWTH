import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, render } from "@testing-library/react";
import { rest } from "msw";
import { ReactElement } from "react";
import { ModalDisplayProvider } from "../context";

export const handlers = [
  rest.post("*", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json("success"));
  }),
];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: () => {},
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalDisplayProvider>{children}</ModalDisplayProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export { customRender as render };
