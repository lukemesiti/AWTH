import { BUIButton } from "../../components";
import { RequestInviteForm } from "../../inviteForm";
import { SuccessModal } from "../../successMessage";
import { useModalDisplay } from "../../context";
import { REQUEST_BUTTON_TEXT, REQUEST_INVITE_BUTTON_TEST_ID } from ".";

const RequestInviteButton: React.FC = () => {
  const { setModal } = useModalDisplay();

  return (
    <div data-testid={REQUEST_INVITE_BUTTON_TEST_ID}>
      <BUIButton onClick={() => setModal("form")}>
        {REQUEST_BUTTON_TEXT}
      </BUIButton>
      <RequestInviteForm />
      <SuccessModal />
    </div>
  );
};

export { RequestInviteButton };
