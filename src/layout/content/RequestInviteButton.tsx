import { BUIButton } from "../../components/BUIButton";
import { RequestInviteForm } from "./RequestInviteForm";
import { SuccessModal } from "./SuccessModal";
import { useModalDisplay } from "./useModalDisplay";

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
