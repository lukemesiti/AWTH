import { SUCCESS_MODAL_TEST_ID, SUCCESS_BUTTON_TEST_ID } from ".";
import { BUIModal, BUIButton } from "../components";
import { useModalDisplay } from "../context";

const SuccessModal: React.FC = () => {
  const { modal, setModal } = useModalDisplay();

  return (
    <BUIModal
      isOpen={modal === "success"}
      handleClose={() => setModal("closed")}
      title="All done!"
      testId={SUCCESS_MODAL_TEST_ID}
    >
      <p className="mb-8">
        You will be one of the first to experience Broccoli & Co. when we
        launch.
      </p>
      <BUIButton
        fullWidth
        onClick={() => setModal("closed")}
        testId={SUCCESS_BUTTON_TEST_ID}
      >
        Ok
      </BUIButton>
    </BUIModal>
  );
};

export { SuccessModal };
