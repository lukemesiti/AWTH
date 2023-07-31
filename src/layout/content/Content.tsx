import { RequestInviteButton } from "./RequestInviteButton";
import { CONTENT_TEST_ID } from "./types";

const Content: React.FC = () => {
  return (
    <main
      data-testid={CONTENT_TEST_ID}
      className="flex-auto flex items-center justify-center p-3"
    >
      <div className="text-center">
        <h1>A better way to enjoy every day.</h1>
        <p>Be the first to know when we launch.</p>
        <RequestInviteButton />
      </div>
    </main>
  );
};

export { Content };
