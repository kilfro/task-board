import React from 'react'
import {X} from 'react-bootstrap-icons'
import {removeTask} from '../store/actions'
import {connect} from 'react-redux'

const getCardStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    fontFamily: 'arial',
    padding: 5,
    borderRadius: 5,
    border: 'solid 1px',
    borderColor: '#9d9d9d',
    borderLeft: 'black solid 5px',
    marginBottom: 10,
    width: 200,
    backgroundColor: isDragging ? 'rgba(250, 250, 250, 0.8)' : '#e9e9e9',
    ...draggableStyle,
    display: 'flex',
})

const removeButtonStyle = {
    cursor: 'pointer',
}

const TaskCard = (props) => {
    const {innerRef, isDragging, style: draggableStyle, children, removeTask, droppableId, draggableId, ...rest} = props
    const removeHandler = () => {
        removeTask(droppableId, draggableId)
    }

    return (
        <div
            ref={innerRef}
            {...rest}
            style={getCardStyle(isDragging, draggableStyle)}
        >
            <div style={{width: 'inherit'}}>{children}</div>
            <X
                style={removeButtonStyle}
                onClick={removeHandler}
            />
        </div>
    )
}

const mapDispatchToProps = {
    removeTask
}

export default connect(null, mapDispatchToProps)(TaskCard)