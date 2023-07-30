import { BUIButton } from "../../components";
import { RequestInviteForm } from "../../inviteForm";
import { SuccessModal } from "../../successMessage";
import { useModalDisplay } from "../../context";

const RequestInviteButton: React.FC = () => {
  const { setModal } = useModalDisplay();

  return (
    <>
      <BUIButton onClick={() => setModal("form")}>Request an invite</BUIButton>
      <RequestInviteForm />
      <SuccessModal />
    </>
  );
};

export { RequestInviteButton };
