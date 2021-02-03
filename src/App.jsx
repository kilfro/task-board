import React, {useState} from 'react'
import Board from "./components/Board";

const App = () => {
    const defaultState = {
        todo: [],
        doing: [],
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