import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import './OldDraggableCalendar.css'

const todoList = [{time: "day 1", content: "eat"}, {time: "day 2", content: "sleep"}]

const OldDraggableCalendar = () => (
    <Container id="calendar">
        <h1>Calendar</h1>
        <Row>
            {todoList.map((todo) => (
                <Col>
                    <div className={"box"}>
                        <div className={"item"} id={"drag" + Math.random() * 1000} draggable={"true"}>
                            <input className={"btn btn-primary"} type={"button"} data-bs-toggle={"popover"} data-bs-trigger={"focus"} title={todo.time}
                                   data-bs-content={todo.content} value={todo.content} data-bs-original-title={"1:00AM"} aria-label={"1:00AM"}/>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    </Container>
)

export default OldDraggableCalendar;