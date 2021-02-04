import React, {useRef} from 'react'
import {connect} from 'react-redux'
import {createTask} from '../store/actions'

const Header = ({createTask}) => {
    const inputRef = useRef()

    const createHandler = () => {
        const value = inputRef.current.value.trim()

        if (value !== '') {
            createTask(value)
            inputRef.current.value = ''
        }
    }

    const clearHandler = () => {
        inputRef.current.value = ''
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={clearHandler}>CLEAR</button>
            <button onClick={createHandler}>ADD</button>
        </div>
    )
}

export default connect(null, {createTask})(Header)