import React from 'react';
import { Spring } from 'react-spring/renderprops'; 

export const Welcome = ({ name, time }) => {
    return (
       <Spring
            from={{ 
                opacity: 0, 
            }}
            to={{ 
                opacity: 1,
                }}
            config={{
                duration: 1000
            }}>
            {props => (
            <div style={props}>
                <div style={welcomeStyle}>
                <h1>Hello, {name}</h1>
                <h3>Curent time is {time}</h3>
                </div>
            </div>
            )}
        </Spring>
    )
}

const welcomeStyle = {
    background: 'slateblue', 
    color: 'white'
}