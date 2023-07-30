import { useContext } from "react";
import { ModalDisplayContext } from "./ModalDisplayContext";

export function useModalDisplay() {
  return useContext(ModalDisplayContext);
}
