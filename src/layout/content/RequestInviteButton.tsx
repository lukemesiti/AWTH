import { BUIButton } from "../../components";
import { RequestInviteForm } from "../../inviteForm";
import { SuccessModal } from "../../successMessage";
import { useModalDisplay } from "../../context";

const RequestInviteButton: React.FC = () => {
  const { setModal } = useModalDisplay();

  return (
    <div data-testid="request-invite-button">
      <BUIButton onClick={() => setModal("form")}>Request an invite</BUIButton>
      <RequestInviteForm />
      <SuccessModal />
    </div>
  );
};

export { RequestInviteButton };
