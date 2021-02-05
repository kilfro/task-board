import React from 'react'

const getCardStyle = (isDragging, draggableStyle) => ({
    padding: 5,
    backgroundColor: isDragging ? '#85475e' : '#85b364',
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