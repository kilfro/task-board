import React from 'react'

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
})

const TaskCard = ({innerRef, isDragging, style: draggableStyle, children, ...rest}) => (
    <div
        ref={innerRef}
        {...rest}
        style={getCardStyle(isDragging, draggableStyle)}
    >
        {children}
    </div>
)

export default TaskCard