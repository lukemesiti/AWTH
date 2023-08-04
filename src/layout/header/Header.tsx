import { HEADER_TEST_ID } from "./types";

const Header: React.FC = () => {
  return (
    <header className="p-8" data-testid={HEADER_TEST_ID}>
      <h1 className="text-3xl font-bold">🥦Broccoli & Co.</h1>
    </header>
  );
};

export { Header };
