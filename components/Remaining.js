import React from 'react'
import { AppContext } from './context/AppContext'
import { useContext } from 'react';
import { ProgressBar } from 'react-bootstrap';

const Remaining = () => {
    const {expenses, budget} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item)=>{
        return (total = total + item.cost);
    }, 0)
    return (
    <div className='alert alert-success p-4'>
        <span>Remaining: ${budget-totalExpenses}</span>
    </div>
    )
}

export default Remaining