import {ADD_TASK, MOVE_TASK, REMOVE_TASK} from './actionTypes'

const defaultState = {
    todo: [
        {id: '1', description: 'aaa'},
        {id: '2', description: 'bbb'},
        {id: '3', description: 'ccc'},
        {id: '4', description: 'ddd'},
        {id: '5', description: 'eee'},
        {id: '6', description: 'fff'},
        {id: '7', description: 'ggg'},
    ],
    doing: [
        {id: '8', description: 'hhh'},
        {id: '9', description: 'iii'},
    ],
    done: [
        {id: '10', description: 'jjj'},
        {id: '11', description: 'kkk'},
    ],
}

export const reducer = (state = defaultState, action = {}) => {
    switch (action.type) {
        case ADD_TASK:
            const {todo} = state
            todo.push({
                id: Date.now().toString(),
                description: action.payload.description
            })

            return {
                ...state,
                todo
            }
        case REMOVE_TASK:
            const {droppableId, draggableId: taskId} = action.payload
            const filteredList = state[droppableId].filter(t => t.id !== taskId)

            return {
                ...state,
                [droppableId]: filteredList
            }
        case MOVE_TASK:
            const {source, destination, draggableId} = action.payload
            let destList, sourceList = [...state[source.droppableId]]
            const movedTask = sourceList.find(t => t.id === draggableId)

            sourceList = sourceList.filter(t => t.id !== draggableId)
            if (source.droppableId === destination.droppableId) {
                destList = [...sourceList]
            } else {
                destList = [...state[destination.droppableId]]
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

            return {
                ...state,
                [source.droppableId]: sourceList,
                [destination.droppableId]: destList,
            }
        default:
            return state
    }
}
