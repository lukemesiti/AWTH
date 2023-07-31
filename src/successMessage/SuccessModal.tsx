import { BUIModal, BUIButton } from "../components";
import { useModalDisplay } from "../context";

const SuccessModal: React.FC = () => {
  const { modal, setModal } = useModalDisplay();

  console.log("modal ", modal);

  return (
    <BUIModal
      isOpen={modal === "success"}
      handleClose={() => setModal("closed")}
      title="All done!"
      testId="success-modal"
    >
      <p>
        You will be one of the first to experience Broccoli & Co. when we
        launch.
      </p>
      <BUIButton
        fullWidth
        onClick={() => setModal("closed")}
        testId="success-button"
      >
        Ok
      </BUIButton>
    </BUIModal>
  );
};

export { SuccessModal };
