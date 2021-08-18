import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle]  =  useState('');
    const [enteredAmount, setEnteredAmount]  =  useState('');
    const [enteredDate, setEnteredDate]  =  useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // }); esta es la manera de hacerlo con un estado por los componentes

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput((prevState) => { //es una funcion dentro de otra
        //     return {...prevState, enteredTitle: event.target.value} //los 3 puntos son spread operator
        // }) //recomienda usar este metodo de dos funciones porque siempre va a utilizar el iltimo snapshot del estado previo
        //por ejemplo es util cuando se usa en un contador ya que esta dependiendo constantemente del estado previo
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => { //objeto que reune los 3 elementos porque tenemos los estados separados
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
    
}

export default ExpenseForm;
