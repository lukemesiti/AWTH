import { HEADER_TEST_ID } from "./types";

const Header: React.FC = () => {
  return (
    <header data-testid={HEADER_TEST_ID}>
      <nav className="mx-auto max-w-7xl md:p-8 p-4">
        <h1 className="text-3xl font-bold">🥦Broccoli & Co.</h1>
      </nav>
    </header>
  );
};

export { Header };

{
  /* <header className="p-8" data-testid={HEADER_TEST_ID}>
<h1 className="text-3xl font-bold">🥦Broccoli & Co.</h1>
</header> */
}
