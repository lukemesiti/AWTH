import React, { PropsWithChildren, createContext, useState } from "react";

type Current = "closed" | "form" | "success";

type State = {
  modal: Current;
  setModal: React.Dispatch<React.SetStateAction<Current>>;
};

export const ModalDisplayContext = createContext<{
  modal: Current;
  setModal: React.Dispatch<React.SetStateAction<Current>>;
}>({} as State);

const ModalDisplayProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [modal, setModal] = useState<Current>("closed");

  return (
    <ModalDisplayContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalDisplayContext.Provider>
  );
};

export { ModalDisplayProvider };
