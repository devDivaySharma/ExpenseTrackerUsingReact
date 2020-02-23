import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const totalIncome = transactions.filter(item => item.amount > 0)
            .reduce((acc,item) => (acc += item.amount),0).toFixed(2);

            const totalExpense = transactions.filter(item => item.amount < 0)
            .reduce((acc,item) => (acc += item.amount),0).toFixed(2);


    return (
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
    <p id="money-plus" className="money plus">{totalIncome}</p>
        </div>
        <div>
            <h4>Expense</h4>
    <p id="money-minus" className="money minus">{totalExpense}</p>
        </div>
        </div>
    )
}
