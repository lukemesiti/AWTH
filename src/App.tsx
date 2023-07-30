import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container as Layout } from "./layout/Container";
import { ModalDisplayProvider } from "./layout/content/ModalDisplayContext";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalDisplayProvider>
        <Layout />
      </ModalDisplayProvider>
    </QueryClientProvider>
  );
};

export default App;
