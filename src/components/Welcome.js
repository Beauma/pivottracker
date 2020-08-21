import React from 'react';
import { Spring } from 'react-spring/renderprops'; 
import '../styles/WelcomeStyle.css'

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
                <div>
                <h1>Pivot Tracker: {name}</h1>
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