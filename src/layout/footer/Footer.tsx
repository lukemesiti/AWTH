import { FOOTER_TEST_ID } from "./types";

const Footer: React.FC = () => {
  return (
    <footer data-testid={FOOTER_TEST_ID} className="text-center p-3 text-lg">
      <div>Made with 💚 in Melbourne.</div>
      <div>©️ 2016 Broccoli & Co. All rights reserved.</div>
    </footer>
  );
};

export { Footer };
