import axios from "axios";
import useModal from "../../hooks/Modal/useModal";
import useForm from "../../hooks/Form/useForm";
import { Modal } from "react-bootstrap";

const ModalComponents = () => {
  const { input, inputValue, formReset } = useForm({
    name: "",
  });

  const { modal, handleModalHide } = useModal(false);

  const formSubmit = async (e) => {
    e.preventDefault;
    await axios.post("http://localhost:3000/todos", input);
    formReset();
    handleModalHide();
  };

  return (
    <>
      <Modal show={modal} onHide={handleModalHide} centered>
        <Modal.Body>
          <form onSubmit={formSubmit}>
            <div className="my-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={input.name}
                onChange={inputValue}
              />
            </div>
            <div className="my-3">
              <button type="submit" className="btn btn-sm btn-primary">
                Create
              </button>
              <button
                className="btn btn-sm btn-danger ms-3"
                onClick={handleModalHide}
              >
                Close
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponents;
