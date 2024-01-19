import { useState } from "react";

const useModal = (init) => {
  const [modal, setModal] = useState(init);

  const handleModalShow = () => setModal(true);
  const handleModalHide = () => setModal(false);

  return { modal, handleModalShow, handleModalHide };
};

export default useModal;
