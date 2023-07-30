const Header: React.FC = () => {
  return (
    <header data-testid="header" className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h1>Broccoli & Co.</h1>
          </a>
        </div>
      </nav>
    </header>
  );
};

export { Header };
