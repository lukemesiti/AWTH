import { RequestInviteButton } from "./RequestInviteButton";
import { CONTENT_TEST_ID } from "./types";

const baseHeaderStyle = "text-4xl md:text-5xl";
const baseSubTextStyle = "text-2xl md:text-3xl";

const Content: React.FC = () => {
  return (
    <main
      data-testid={CONTENT_TEST_ID}
      className="flex-auto flex items-center justify-center p-3"
    >
      <div className="text-center max-w-screen-sm bg-orange-200 rounded-2xl p-8">
        <h1 className={baseHeaderStyle}>A better way</h1>
        <h1 className={`${baseHeaderStyle} mb-10`}>to enjoy every day 🎉</h1>
        <p className={baseSubTextStyle}>
          Be the <span className="font-bold">FIRST</span>
        </p>
        <p className={`${baseSubTextStyle} mb-10`}>to know when we launch 🚀</p>
        <RequestInviteButton />
      </div>
    </main>
  );
};

export { Content };
