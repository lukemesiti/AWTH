import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalDisplayProvider } from "../context";

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

export const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalDisplayProvider initialState="closed">
        {children}
      </ModalDisplayProvider>
    </QueryClientProvider>
  );
};
