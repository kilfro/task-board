import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import TaskCard from './TaskCard'

const DraggableContainer = ({draggableId, droppableId, index, task}) => (
    <Draggable draggableId={draggableId} index={index}>
        {(provided, snapshot) => (
            <TaskCard
                innerRef={provided.innerRef}
                isDragging={snapshot.isDragging}
                draggableId={draggableId}
                droppableId={droppableId}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {task.description}
            </TaskCard>
        )}
    </Draggable>
)

export default DraggableContainer