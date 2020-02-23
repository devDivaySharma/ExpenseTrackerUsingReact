import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const AddTransaction  = () =>{
    //this setting hook for by default values on elements
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const { addTransactions } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const obj = {
            id : Math.floor(Math.random() * 100000000000),
            text,
            amount : +amount 
        }
        addTransactions(obj);
    }

    return(
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}> 
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text ........."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount ........."></input>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}