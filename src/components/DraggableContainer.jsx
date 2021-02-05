import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import TaskCard from './TaskCard'

const DraggableContainer = ({draggableId, index, text}) => (
    <Draggable draggableId={draggableId} index={index}>
        {(provided, snapshot) => (
            <TaskCard
                innerRef={provided.innerRef}
                isDragging={snapshot.isDragging}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {text}
            </TaskCard>
        )}
    </Draggable>
)

export default DraggableContainer