import React from "react"

const Notification = ({notification}) => {
    const notificationStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }
    
    if (notification === '') return

    return (
        <div style={notificationStyle}>
            {notification}
        </div>
    )
}

export default Notification