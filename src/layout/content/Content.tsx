import { RequestInviteButton } from "./RequestInviteButton";
import { CONTENT_TEST_ID } from "./types";

const baseHeaderStyle = "text-4xl md:text-5xl font-black";
const baseSubTextStyle = "text-2xl md:text-3xl font-medium";

const Content: React.FC = () => {
  return (
    <main
      data-testid={CONTENT_TEST_ID}
      className="flex-auto flex items-center justify-center p-3"
    >
      <div className="text-center text-white max-w-screen-sm rounded-2xl p-8">
        <h1 className={baseHeaderStyle}>A BETTER WAY</h1>
        <h1 className={`${baseHeaderStyle} mb-6`}>TO ENJOY EVERY DAY</h1>
        <p className={baseSubTextStyle}>Be the first</p>
        <p className={`${baseSubTextStyle} mb-10`}>to know when we launch</p>
        <RequestInviteButton />
      </div>
    </main>
  );
};

export { Content };
