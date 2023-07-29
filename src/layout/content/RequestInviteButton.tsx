import { useState } from "react";
import { RequestInviteForm } from "./RequestInviteForm";

const RequestInviteButton: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsFormOpen(true)}
      >
        Request an invite
      </button>
      <RequestInviteForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
    </>
  );
};

export { RequestInviteButton };
