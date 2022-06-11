import { Fragment } from "react"
import { Link } from "react-router-dom";
const MainHeader = () => {
    return (
        <Fragment>
            <div className="header">
                <ul>
                    <li ><Link to='/welcome'>Welcome </Link></li>
                    <li ><Link to='/products'>Products</Link></li>
                </ul>
            </div>
        </Fragment>
    )
}


export default MainHeader;