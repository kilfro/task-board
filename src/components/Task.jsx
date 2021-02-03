import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

const Task = ({draggableId, index, text}) => (
    <Draggable draggableId={draggableId} index={index}>
        {(provided) => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {text}
            </div>
        )}
    </Draggable>
)

export default Task