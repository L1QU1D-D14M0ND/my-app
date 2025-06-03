import React, { useState } from 'react';

function DiceSave({ number, type, loader }) {
    const normal = { nd:0, td:'' };
    const [configuration, setConfiguration] = useState(normal);

    return <>
            <button onClick={() => { setConfiguration({ nd:number, td:type }) }} > Save configuration </button>
            { configuration.nd === 0 ? <p>Empty</p> : <p> Number of dices: {configuration.nd}, type of dice: {configuration.td} </p> }
            <button onClick={() => {loader(configuration.nd,configuration.td)}} > Load </button>
        </>
}

export default DiceSave;
