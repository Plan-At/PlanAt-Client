import React from 'react';
import {Container} from "react-bootstrap";

import './OldDraggableCalendar.css'

const todoList = [{time: "day 1", content: "eat"}, {time: "day 2", content: "sleep"}]

const OldDraggableCalendar = () => (
    <Container id="calendar">
        <h1>Calendar</h1>
        <ul>{
            todoList.map((todo) => (
                <div className={"box"}>
                    <div className={"item"} id={"drag" + Math.random() * 1000} draggable={"true"}>
                        <input className={"btn btn-primary"} type={"button"} data-bs-toggle={"popover"} data-bs-trigger={"focus"} title={todo.time}
                               data-bs-content={todo.content} value={todo.content} data-bs-original-title={"1:00AM"} aria-label={"1:00AM"}/>
                    </div>
                </div>
            ))
        }</ul>
    </Container>
)

export default OldDraggableCalendar;