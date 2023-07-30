import { BUIModal, BUIButton } from "../components";
import { useModalDisplay } from "../context";

const SuccessModal: React.FC = () => {
  const { modal, setModal } = useModalDisplay();

  return (
    <BUIModal
      isOpen={modal === "success"}
      handleClose={() => setModal("closed")}
      title="All done!"
    >
      <p>
        You will be one of the first to experience Broccoli & Co. when we
        launch.
      </p>
      <BUIButton fullWidth onClick={() => setModal("closed")}>
        Ok
      </BUIButton>
    </BUIModal>
  );
};

export { SuccessModal };
