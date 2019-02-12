import React from 'react';

const userInput=(props)=>{
    const style={
        width: 400,
        textAlign: 'center'
    }
    return(
        <div >
            <input style={style} type="text" onChange={props.updateName} value={props.topic}/>
        </div>
    );
}

export default userInput;