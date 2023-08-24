import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch,budget,expenses, currency } = useContext(AppContext);
    const [updatedBudget, setUpdatedBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudget = (event) => {
        const newBudget = parseInt(event.target.value, 10);
        
        if (newBudget > 20000) {
            alert("The value cannot be greater than 20,000");
            return;
        }
        else if (newBudget <  totalExpenses){
            alert("The value cannot be less than £"+totalExpenses );
            return;
        }
         else {
            setUpdatedBudget(newBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget, // Use newBudget here
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: </span><span>{currency}</span>&nbsp;
            <input style={{width:"10vw"}} type="number" value={updatedBudget} step="10" id="budget" onChange={handleBudget} />
        </div>
    );
};

export default Budget;
