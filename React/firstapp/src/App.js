import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/newExpense/newExpense';
import ExpenseFilter from './components/newExpense/expenseFilter';
import Form from './components/Form';
function App() {
  const dummyexpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 12.32,
      date: new Date(2020,7,14)
    },
    
    {
      id: 'e2',
      title: 'Car Insuarance',
      amount: 15.32,
      date: new Date(2020,8,14)
    },
    {
      id: 'e3',
      title: 'New Car',
      amount: 5000,
      date: new Date(2020,9,14)
    },
    {
      id: 'e4',
      title: 'Food',
      amount: 12.32,
      date: new Date(2020,10,14)
    },
    
    
  ]
  const [ expenses, setExpenses] = useState(dummyexpenses);
  const onExpenseItemAdd = (newExpense) => {
    setExpenses(expense => {
      return [newExpense,...expense];
    })
    console.log(expenses[0].date.getFullYear)
  }
  const handleExpenseFilter = (data) => {
    console.log('this is running in appjs');
    console.log(data);
    setSelectedYear(data);
  }
  const [selectedYear,setSelectedYear] = useState('');
  const [name,setName] = useState('');
  useEffect(() => {
    
  },[name])
  const onDataChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      {/* <ExpenseFilter onFilterChange={handleExpenseFilter}/>
      {expenses.filter(data=> data.date.getFullYear().toString() === selectedYear).map(
        data => <ExpenseItem title={data.title} amount={data.amount} date={data.date}/>
      )}
      <NewExpense onExpenseItem={onExpenseItemAdd}/>
      <input type="text" onChange={(e) => onDataChange(e)}/>
      <h1> {name} </h1> */}

      <Form/>
    </div>
  );
}

export default App;
