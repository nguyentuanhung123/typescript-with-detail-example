import React, { useState } from 'react'

const Callback = ({getColor, getSize, setUIColor}) => {

    const [activeColor, setActiveColor] = useState('');
    const [activeSize, setActiveSize] = useState('')

    const handleChangeColor = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        setActiveColor(value);
        //getColor(value);
        setUIColor(value);
    }

    const handleChangeSize = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        setActiveSize(value);
        getSize(value);
    }

    return (
        <>
            <input
                type='text'
                name='color'
                id='input'
                aria-label='input'
                onChange={handleChangeColor}
                value={activeColor} />
            <input
                type='text'
                name='size'
                id='input'
                aria-label='input'
                onChange={handleChangeSize}
                value={activeSize} />
        </>
    )
}

export default Callback
