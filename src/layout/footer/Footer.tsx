import { FOOTER_TEST_ID } from "./types";

const Footer: React.FC = () => {
  return (
    <footer
      data-testid={FOOTER_TEST_ID}
      className="text-center py-8 px-1 md:text-lg sm:text-md"
    >
      <div>Made with 💚➕🍝 in Melbourne.</div>
      <div>©️ 2023 Broccoli & Co. All rights reserved.</div>
    </footer>
  );
};

export { Footer };
