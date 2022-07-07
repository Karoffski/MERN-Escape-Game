import React, { useState, useEffect } from 'react';

const ReserveRoom = () => {
    
    const [reservation, setReservation] = useState();

    function updateReservation() {
       setReservation(reservation)
    }

   function handleChange(event) {setReservation({value: event.target.value})}
    function handleSubmit() {}

    useEffect((event) => {
        event.preventDefault(); 
        updateReservation();
    })

    const style1 = {display: 'flex'};
    const style2 = {flexDirection: 'row'};
    const style3 = {justifyContent: 'center'};
    const style4 = {margin: '5vh 80vh 0vh '}
    const style5 = {padding: '5vh'}
   
    let x = []
    let y = 3
    let z = 6

    for (let i = y; i <= z; i++) {
        x.push(i)
    }

    return (
    <div>
        <form style={{...style1, ...style2,...style3, ...style4, ...style5}} onSubmit={handleSubmit}>
            <select onChange={handleChange}>
                {x.map(w => {
                    return (
                        <option>{w}</option>
                    )
                })}
            </select>
            <label for='firstname'>First name: </label>
            <input name='firstname'/>
            <label for='lastname'>Last name: </label>
            <input name='lastname'/>
            <label for='age'>Birthday: </label>
            <input name='age'/>
            <input type="submit" value="Submit"/>
        </form>
    </div>

    )
}

export default ReserveRoom;