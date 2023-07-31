import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, cleanup, render } from "@testing-library/react";
import { ReactElement } from "react";
import { afterEach } from "vitest";
import { ModalDisplayProvider } from "../context";

afterEach(() => {
  cleanup();
});

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
