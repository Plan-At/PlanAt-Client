import React, { useState } from 'react';
import {Container, Popover} from "react-bootstrap";
import {div, btn, id, type, drag} from "./util/htmlhelper";
import {Date, Time, Day} from "./util/timehelper";

import './DraggableCalendar.css'

const item = document.querySelectorAll('.item');

item.forEach(e=>{
    e.addEventListener('dragstart', dragStart);
    e.addEventListener('dragend', dragEnd);
});


function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnd(e) {
    e.target.classList.remove('hide');
}


/* drop targets */
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    if(!e.target.classList.contains("box")) return;
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    if(!e.target.classList.contains("box")) return;
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    // add it to the drop target
    e.target.appendChild(draggable);
    // display the draggable element
    draggable.classList.remove('hide');
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return <Popover popoverTriggerEl/>
})

const calendar = document.getElementById("calendar");

var e2 = div("row")
var iii = 0;

for (var i = 1; i <8 ; i++) {
    var e3 = div("col");
    for(var j = 0; j< 5; j++){
        e3.appendChild(getDay(j*7+i));
        e2.appendChild(e3);
    }
}
// alert(new Date(17, 3, 2000).dayOfWeek);

calendar.appendChild(e2);
function getDay(num){
    var d = new Day(new Date(num, 3, 2022));
    for(let i = 0; i < Math.random()*3-0.5; i++){
        var e = new Event(new Time(i+1, 0), "Event: "+iii++);
        d.addEvents(e);
    }
    return d.getOverview();
    // return addEvents(div("box"), num);
}
function addEvents(day, num){
    //api stuff I think
    for(let i = 0; i < Math.random()*3-0.5; i++){
        var e = div("item", id("drag"+num+i), drag("true"));
        var pop = btn("btn", type("button"), ["data-bs-toggle", "popover"],["data-bs-trigger","focus"], ["title","Popover title"], ["data-bs-content","day: "+num+", event: "+i]);
        // <button type="button" class="btn" data-bs-toggle="popover" data-bs-trigger="focus" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
        e.appendChild(pop);
        day.appendChild(e);
    }
    return day;
}

const DraggableCalendar = () => (
    <Container id="calendar">
        <h1>Calendar</h1>
    </Container>
)

export default DraggableCalendar;