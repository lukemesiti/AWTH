import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container as Layout } from "./layout";
import { ModalDisplayProvider } from "./context";

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
