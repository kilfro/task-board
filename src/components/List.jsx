import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import DraggableContainer from './DraggableContainer'

const getListStyle = (isDraggingOver) => ({
    margin: 5,
    padding: 5,
    backgroundColor: isDraggingOver ? 'antiquewhite' : 'aliceblue',
})

const List = ({droppableId, tasks}) => (
    <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
            <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                {tasks.map((t, index) => (
                    <DraggableContainer
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