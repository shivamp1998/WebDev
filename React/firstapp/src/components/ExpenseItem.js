import Calender from './calender'
function ExpenseItem(props) {
    return (
        <div>
           <p> {props.title} </p>
           <p> {props.amount} </p>
           <Calender date={props.date}/>
        </div>
    )
}

export default ExpenseItem;