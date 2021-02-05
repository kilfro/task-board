import {ADD_TASK, MOVE_TASK, REMOVE_TASK} from './actionTypes'

export const moveTask = (source, destination, draggableId) => ({
    type: MOVE_TASK,
    payload: {
        source,
        destination,
        draggableId,
    }
})

export const createTask = (description) => ({
    type: ADD_TASK,
    payload: {
        description
    }
})

export const removeTask = (droppableId, draggableId) => ({
    type: REMOVE_TASK,
    payload: {
        droppableId,
        draggableId,
    }
})