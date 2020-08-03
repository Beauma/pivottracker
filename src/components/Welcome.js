import React from 'react'

export const Welcome = ({ name, time }) => {
    return (
        <div>
            <h1>Welcome, {name}</h1>
            <h3>Curent time is {time}</h3>
        </div>
    )
}