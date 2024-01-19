import { Card, Modal } from "react-bootstrap";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import "./TodayTodo.css";
import { useEffect, useState } from "react";
import axios from "axios";
import useModal from "../../hooks/Modal/useModal";
import useForm from "../../hooks/Form/useForm";

const TodayTodo = () => {
  const { input, inputValue, formReset } = useForm({
    name: "",
  });
  const [todo, setTodo] = useState([]);

  const { modal, handleModalShow, handleModalHide } = useModal(false);

  const getAllTodo = async () => {
    const preData = await axios.get("http://localhost:3000/todos");
    setTodo(preData.data);
  };

  useEffect(() => {
    getAllTodo();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault;
    await axios.post("http://localhost:3000/todos", input);
    formReset();
    handleModalHide();
  };

  return (
    <>
      <div className="todo-area">
        <Card className="mb-lg-3 border-radious bg shadow-box">
          <Card.Body className="ms-3">
            <h2 className="header-text-h2 mb-3">Today</h2>
            <button className="button" onClick={handleModalShow}>
              <IoMdAddCircleOutline />
              <span>Add New Task</span>
            </button>
            <ul>
              {todo.length === 0
                ? "No Task Found"
                : todo.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="d-flex justify-content-between"
                      >
                        <div>
                          <input type="checkbox" name="" id="" />{" "}
                          <span>{item.name}</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-md-2">
                          <button className="btn-custom">
                            <FaTrash />
                          </button>
                          <button className="btn-custom">
                            <MdEditSquare />
                          </button>
                        </div>
                      </li>
                    );
                  })}
            </ul>
          </Card.Body>
        </Card>
      </div>

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
            </div>
          </form>
          <button className="btn btn-sm btn-danger" onClick={handleModalHide}>
            Close
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TodayTodo;
