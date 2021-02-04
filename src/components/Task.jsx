import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

const getTaskStyle = (isDragging, draggableStyle) => ({
    padding: 5,
    backgroundColor: isDragging ? '#85475e' : '#85b364',
    ...draggableStyle,
})

const Task = ({draggableId, index, text}) => (
    <Draggable draggableId={draggableId} index={index}>
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getTaskStyle(snapshot.isDragging, provided.draggableProps.style)}
            >
                {text}
            </div>
        )}
    </Draggable>
)

export default Task