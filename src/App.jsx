import React, {useState} from 'react'
import Board from './components/Board'

const App = () => {
    const defaultState = {
        todo: [
            {id: 1, description: 'sdsd'},
            {id: 2, description: 'asd'},
            {id: 3, description: 'qwq'},
        ],
        doing: [
            {id: 4, description: 'zxcz'},
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