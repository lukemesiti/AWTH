import { HEADER_TEST_ID } from "./types";

const Header: React.FC = () => {
  return (
    <header data-testid={HEADER_TEST_ID}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <h1 className="text-3xl font-bold -m-1.5 p-1.5 ">Broccoli & Co.</h1>
        </div>
      </nav>
    </header>
  );
};

export { Header };
