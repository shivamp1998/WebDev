import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem'
function App() {
  const expenses = [
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
  return (
    <div className="App">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date = {expenses[0].date}/>
    </div>
  );
}

export default App;
