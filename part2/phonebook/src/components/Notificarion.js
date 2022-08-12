import React from "react"

const Notification = ({notification, type}) => {
    const notificationStyleSuccess = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBorrom: 10
    }
    
    const notificationStyleError = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBorrom: 10
    }


    if (notification === '') return

    else if (type === 'success'){
        return (
            <div style={notificationStyleSuccess}>
                {notification}
            </div>
        )    
    }

    // type === error
    return (
        <div style={notificationStyleError}>
            <br/>
            {notification}
            <br/>
        </div>
    )
}

export default Notification