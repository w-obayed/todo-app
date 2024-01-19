import { Col, Container, Row } from "react-bootstrap";
import { HiBars4 } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { IoCalendarClearOutline } from "react-icons/io5";
import { RiFile4Fill } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrTextAlignCenter } from "react-icons/gr";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { GrFormAdd } from "react-icons/gr";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./CreateTodo.css";

const CreateTodo = () => {
  // use loction
  const loction = useLocation();

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={3}>
            <div className="left-side">
              <div className="menu-bar d-flex flex-row justify-content-between align-items-center mb-3">
                <h2>Menu</h2>
                <HiBars4 />
              </div>
              <div className="search">
                <input
                  className="form-control"
                  type="search"
                  name=""
                  id=""
                  placeholder="Search"
                />
                <span>
                  <BiSearch />
                </span>
              </div>
              <div className="menu-area ms-lg-3">
                <h2 className="md-text">Tasks</h2>
                <ul>
                  <li>
                    <Link
                      to="upcoming"
                      className="d-flex flex-row justify-content-between align-items-center"
                      id={loction.pathname === "/upcoming" ? "active" : ""}
                    >
                      <div className="icon d-flex flex-row justify-content-center align-items-center gap">
                        <MdKeyboardDoubleArrowRight />
                        <span>Upcoming</span>
                      </div>
                      <p className="text-icon">
                        15
                        <GrFormAdd />
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="today"
                      className="d-flex flex-row justify-content-between align-items-center"
                      id={loction.pathname === "/today" ? "active" : ""}
                    >
                      <div className="icon d-flex flex-row justify-content-center align-items-center gap">
                        <AiOutlineBars />
                        <span>Today</span>
                      </div>
                      <p className="numder-text">8</p>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="d-flex flex-row gap">
                      <IoCalendarClearOutline />
                      <span className="sm-text">Calender</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex flex-row gap">
                      <RiFile4Fill />
                      <span className="sm-text">Sticky Wall</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="list-area mt-lg-5 ms-lg-3">
                <h2 className="md-text">Lists</h2>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="d-flex flex-row  align-items-center mb-3 gap-2 ms-lg-2 sm-text"
                    >
                      <span className="bg-icon"></span>
                      Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex flex-row  align-items-center mb-3 gap-2 ms-lg-2 sm-text"
                    >
                      <span className="bg-icon"></span>
                      Personal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex flex-row  align-items-center mb-3 gap-2 ms-lg-2 sm-text"
                    >
                      <span className="bg-icon"></span>
                      Study
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="add-list search">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Add new list"
                        />
                        <span className="input-icon">
                          <IoMdAddCircleOutline />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="signout-menu">
                <ul>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="d-flex flex-row align-items-center gap-4"
                    >
                      <GrTextAlignCenter
                        style={{
                          fontSize: "20px",
                          color: "var(--log-text-color)",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "25px",
                          color: "var(--log-text-color)",
                        }}
                      >
                        Settings
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex flex-row align-items-center gap-4"
                    >
                      <FaArrowRightFromBracket
                        style={{
                          fontSize: "20px",
                          color: "var(--log-text-color)",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "25px",
                          color: "var(--log-text-color)",
                        }}
                      >
                        Sign Out
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateTodo;
