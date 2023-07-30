import { BUIModal } from "../../components";
import { BUIButton } from "../../components/BUIButton";

interface ComponentProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessModal: React.FC<ComponentProps> = ({ isOpen, setIsOpen }) => {
  return (
    <BUIModal isOpen={isOpen} setIsOpen={setIsOpen} title="All done!">
      <p>
        You will be one of the first to experience Broccoli & Co. when we
        launch.
      </p>
      <BUIButton fullWidth>Ok</BUIButton>
    </BUIModal>
  );
};

export { SuccessModal };
