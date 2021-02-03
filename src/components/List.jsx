import React from 'react'
import {Droppable} from 'react-beautiful-dnd'

const List = ({droppableId}) => (
    <Droppable dropabbleId={droppableId}>
        {() => <div/>}
    </Droppable>
)

export default List