import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import Task from './Task'

const List = ({droppableId, tasks}) => (
    <Droppable droppableId={droppableId}>
        {(provided) => (
            <div ref={provided.innerRef}>
                {tasks.map((t, index) => (
                    <Task
                        key={t.id}
                        draggableId={t.id.toString()}
                        index={index}
                        text={t.description}
                    />)
                )}
                {provided.placeholder}
            </div>
        )}
    </Droppable>
)

export default List