import classes from './Modal.module.css';
import { Fragment } from 'react';
import { createPortal } from 'react-dom';
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}
const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const overlay = document.getElementById('overlay');
const Modal = props => {
    return <Fragment>
        {createPortal(<Backdrop onClose={props.onClose}/>,overlay)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,overlay)}
    </Fragment>
}

export default Modal;