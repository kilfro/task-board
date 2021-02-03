import React from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import List from './List'

const dragEndHandler = () => {
}

const Board = ({tasks, setTasks}) => (
    <DragDropContext onDragEnd={dragEndHandler}>
        {Object.keys(tasks).map(listName => <List key={listName} droppableId={listName} tasks={tasks[listName]}/>)}
    </DragDropContext>
)

export default Board