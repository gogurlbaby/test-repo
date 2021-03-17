import React, { useState } from 'react';


import Button from '../../appcomponents/button';
import Navbar from '../../appcomponents/navbar'


function Home() {
    const [color, setColor] = useState('black');
    const [text, setText] = useState('hello')


    function changeColorText(color,text){
        setColor(color)
        setText(text)
    }

    return(
        <div>
            <Navbar text="Whizzy Academy" color="#1e88e5"/>
            <h1>My Components</h1>
            <Button text="Clear" color="#d50000"/>
            <Button text="Login" color="#1e88e5"/>
            <Button text="Cancel" color="#880e4f"/>
            <Button 
            text="Submit" 
            color={color} 
            onClickButton={() => changeColorText('blue','hi')
            }/>


            <Button text={text} color={color} onClickButton={() => changeColorText('red','hey')}/>
            
            
            
        </div>
    )
}

export default Home;