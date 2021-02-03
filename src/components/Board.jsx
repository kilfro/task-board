import React from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import List from './List'

const Board = ({tasks, setTasks}) => {
    const move = (source, destination, draggableId) => {
        let destList
        let sourceList = [...tasks[source.droppableId]]
        const movedTask = sourceList.find(t => t.id == draggableId)

        sourceList = sourceList.filter(t => t.id != draggableId)
        if (source.droppableId === destination.droppableId) {
            destList = [...sourceList]
        } else {
            destList = [...tasks[destination.droppableId]]
        }

        if (destination.index === 0) {
            destList = [movedTask, ...destList]
        } else if (destination.index === destList.length) {
            destList = [...destList, movedTask]
        } else {
            const sliceOne = destList.slice(0, destination.index)
            const sliceTwo = destList.slice(destination.index)
            destList = [...sliceOne, movedTask, ...sliceTwo]
        }

        const newState = {
            ...tasks,
            [source.droppableId]: sourceList,
            [destination.droppableId]: destList,
        }

        setTasks(newState)
    }

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
            {Object.keys(tasks).map(listName => <List key={listName} droppableId={listName} tasks={tasks[listName]}/>)}
        </DragDropContext>
    )
}

export default Board