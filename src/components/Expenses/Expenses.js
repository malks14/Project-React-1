import React, {useState} from 'react';


import ExpensesChart from './ExpensesChart'
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHanlder = selectedYear => {
      
      setFilteredYear(selectedYear)
    }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  });


  
    return (
        <div>
          
          <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHanlder} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList item={filteredExpenses}/>
          </Card>
    </div>  
    )

}
export default Expenses;