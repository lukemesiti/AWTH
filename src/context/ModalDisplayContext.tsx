import React, { PropsWithChildren, createContext, useState } from "react";

export type Current = "closed" | "form" | "success";

export type State = {
  modal: Current;
  setModal: React.Dispatch<React.SetStateAction<Current>>;
};

export const ModalDisplayContext = createContext<{
  modal: Current;
  setModal: React.Dispatch<React.SetStateAction<Current>>;
}>({} as State);

interface ModalProps {
  initialState: Current;
}

export const ModalDisplayProvider: React.FC<PropsWithChildren<ModalProps>> = ({
  initialState,
  children,
}) => {
  const [modal, setModal] = useState<Current>(initialState);

  return (
    <ModalDisplayContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalDisplayContext.Provider>
  );
};
