import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import Task from './Task'

const List = ({droppableId, tasks}) => (
    <Droppable dropabbleId={droppableId}>
        {() => (
            <div>
                {tasks.map((t, index) => <Task key={t.id} draggableId={t.id} index={index} text={t.description}/>)}
            </div>
        )}
    </Droppable>
)

export default List