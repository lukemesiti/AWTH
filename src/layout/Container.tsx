import { Header } from "./header";
import { Content } from "./content";
import { Footer } from "./footer";

const Container: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export { Container };
