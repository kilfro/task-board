import React from 'react'
import {DragDropContext} from "react-beautiful-dnd";

const dragEndHandler = () => {
}

const Board = ({tasks, setTasks}) => (
    <DragDropContext onDragEnd={dragEndHandler}/>
)

export default Board