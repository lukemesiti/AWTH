import { useState } from "react";
import { RequestInviteForm } from "./RequestInviteForm";
import { BUIButton } from "../../components/BUIButton";

const RequestInviteButton: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <BUIButton onClick={() => setIsFormOpen(true)}>
        Request an invite
      </BUIButton>
      <RequestInviteForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
    </>
  );
};

export { RequestInviteButton };
