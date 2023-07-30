import { BUIModal } from "../../components";
import { BUIButton } from "../../components/BUIButton";
import { useModalDisplay } from "./useModalDisplay";

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
