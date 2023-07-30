import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container as Layout } from "./layout/Container";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
};

export default App;
