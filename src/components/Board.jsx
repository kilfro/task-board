import React from 'react'
import {connect} from 'react-redux'
import {DragDropContext} from 'react-beautiful-dnd'
import List from './List'
import {moveTask} from '../store/actions'

const containerStyle = {
    display: 'flex'
}

const Board = ({tasks, move}) => {

    const dragEndHandler = ({source, destination, draggableId}) => {
        if (!destination) {
            return
        }

        if (source.droppableId !== destination.droppableId || source.index !== destination.index) {
            move(source, destination, draggableId)
        }
    }

    return (
        <DragDropContext onDragEnd={dragEndHandler}>
            <div style={containerStyle}>
                {Object.keys(tasks).map(listName => (
                    <List
                        key={listName}
                        droppableId={listName}
                        tasks={tasks[listName]}
                    />)
                )}
            </div>
        </DragDropContext>
    )
}

const mapStateToProps = state => ({
    tasks: state
})

const mapDispatchToProps = {
    move: moveTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)