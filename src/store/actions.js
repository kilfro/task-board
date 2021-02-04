import {MOVE_TASK} from './actionTypes'

export const moveTask = (source, destination, draggableId) => ({
    type: MOVE_TASK,
    payload: {
        source,
        destination,
        draggableId,
    }
})