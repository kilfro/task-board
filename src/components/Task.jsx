import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

const Task = ({draggableId, index, text}) => (
    <Draggable draggableId={draggableId} index={index}>
        {() => <div>{text}</div>}
    </Draggable>
)

export default Task