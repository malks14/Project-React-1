import React, {useState} from 'react';

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => { //tanto el nombre de la funcion como el parametro son nombres que pone uno mismo
        const expenseData = {
            ...enteredExpenseData, //es toda la data que se espera del objeto de ExpenseForm linea 34
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
        setIsEditing(false)
    };

    const startEditingHandlter = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandlter}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/> }

    </div>//entender mejor como ! y los && ayudan para ocultar o no el form (clase 67)
} //onSaveExpenseData es un nombre que ponemos nosotros

export default NewExpense;