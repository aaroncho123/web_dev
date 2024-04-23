import React, { useState } from "react";


function Compound() {

    const [principal, setPrincipal] = useState("");
    const [interest, setInterest] = useState("");
    const [time, setTime] = useState("");
    const [compoundAmount, setCompoundAmount] = useState("");
    const [compoundInterest, setCompoundInterest] = useState("");
    const [emptyField, setEmptyField] = useState(true);

    function calcCompound(event) {
        //A=P(1 + r)^t
        event.preventDefault();

        var empty = false;
        if (principal.trim().length === 0 ) empty = true;
        if (interest.trim().length === 0 ) empty = true;
        if (time.trim().length === 0 ) empty = true;

        setEmptyField(empty);
        if (empty === false) {
            var amount = principal * (1 + interest/100) ** time;
            amount = Math.round(amount*100)/100;
            
            var interestFromAmount = amount - principal;
            interestFromAmount = Math.round(amount*100)/100;

            setCompoundAmount(amount);
            setCompoundInterest(interestFromAmount);
        }
    }

    function resetCompound() {
        setPrincipal("");
        setInterest("");
        setTime("");
    }



    return (
        <>
        <br/>
        <h2>Compound Interest Tool</h2>
        <form onSubmit={calcCompound}>
        <label> Principal: </label>
        <input type="text" value={principal|| ""} placeholder="Enter Principal" onChange={(e)=>{setPrincipal(e.target.value)}}/>
        <label> Interest: </label>
        <input type="text" value={interest|| ""}placeholder="Enter Interest" onChange={(e)=>{setInterest(e.target.value)}}/>
        <label> Years: </label>
        <input type="text" value={time|| ""} placeholder="Enter Years" onChange={(e)=>{setTime(e.target.value)}}/>
        <br/>
        <div display="flex"   gap="20px">
        <button type="submit">Calculate</button>
        <button onClick={resetCompound}>reset</button>
        </div>
        </form>
        <br/>
        
        {(emptyField === false) &&             
            <div>
            <h3> Compound Amount: ${compoundAmount} </h3>
            <h3> Compound Interest: ${compoundInterest} </h3>
            </div>
        }   

        {emptyField && <h3> Compound Interest: Inputs are empty </h3>}
        </>
    )
}

export default Compound;