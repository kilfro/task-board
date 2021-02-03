import React, {useState} from 'react'
import Board from './components/Board'

const App = () => {
    const defaultState = {
        todo: [
            {id: 1, description: 'aaa'},
            {id: 2, description: 'bbb'},
            {id: 3, description: 'ccc'},
            {id: 4, description: 'ddd'},
            {id: 5, description: 'eee'},
            {id: 6, description: 'fff'},
            {id: 7, description: 'ggg'},
        ],
        doing: [
        ],
        done: [],
    }
    const [tasks, setTasks] = useState(defaultState)

    return (
        <div className='App'>
            <Board tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default App