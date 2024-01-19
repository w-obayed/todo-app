import { Card, Col, Row } from "react-bootstrap";
import { IoMdAddCircleOutline } from "react-icons/io";
import "./UpcomingTodo.css";
import TodayTodo from "../../../components/todayTodo/TodayTodo";

const UpcomingTodo = () => {
  return (
    <>
      <div className="create-todo-area">
        <Row className="mb-3">
          <Col>
            <Card className="mb-lg-3 border-radious bg shadow-box">
              <Card.Body className="align-items-center">
                <div className="header-text">
                  <h2 className="header-text-h2">Upcomming</h2>
                  <span>18</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <TodayTodo />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="todo-area">
              <Card className="mb-lg-3 border-radious bg shadow-box">
                <Card.Body className="ms-3">
                  <h2 className="header-text-h2 mb-3">Tomorrow</h2>
                  <a className="button" href="#">
                    <IoMdAddCircleOutline />
                    <span>Add New Task</span>
                  </a>
                  <ul>
                    <li>
                      <input type="checkbox" name="" id="" />{" "}
                      <span>Database create for company</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />{" "}
                      <span>Database create for company</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />{" "}
                      <span>Database create for company</span>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={6}>
            <div className="todo-area">
              <Card className="mb-lg-3 border-radious bg shadow-box">
                <Card.Body className="ms-3">
                  <h2 className="header-text-h2 mb-3">This Week</h2>
                  <a className="button" href="#">
                    <IoMdAddCircleOutline />
                    <span>Add New Task</span>
                  </a>
                  <ul>
                    <li>
                      <input type="checkbox" name="" id="" />{" "}
                      <span>Database create for company</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />{" "}
                      <span>Database create for company</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />{" "}
                      <span>Database create for company</span>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UpcomingTodo;
