function Calender(props) {
    return (
        <div>
            <p> {props.date.toLocaleString('en-US', {month: 'long'})} </p>
            <p> {props.date.toLocaleString('en-US', {day: '2-digit'})} </p>
            <p> {props.date.getFullYear()} </p>
        </div>
    )
}

export default Calender;