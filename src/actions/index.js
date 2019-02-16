import types from './Types';

export function tick(){
    return {
        type: types.TICK 
    }
}

export function changeColor(){
    const getColor = color()
    console.log(getColor)
    return {
        type: types.CHANGE_COLOR,
        payload: getColor
    }
}

//change color based on the hex format 
//loop until hex format has been reached
//each iteration, using a randomizer, add a #

function color(){
    let hexColor = '#'
    const colorRef = '0123456789abcdef';
    for(let i=0; i<=5; i++){
        const index = Math.floor(Math.random() * colorRef.length);
        hexColor += colorRef[index]
    }
    return hexColor
}