import React, { Fragment } from 'react'
import ReactDom from 'react-dom';
import classes from './Modal.module.css';


const Backdrop = (props) => {
return <div className={classes.backdrop} onClick={props.close}/>;
}


const ModalOverLay = (props) => {
    return (
<div className={classes.modal}>
<div className={classes.content}>{props.children}</div>
</div>
    );
};


const portalElement = document.getElementById('overlays');


const Modal = (props) => {

  return (
    <Fragment>
  {ReactDom.createPortal(<Backdrop close={props.closeCart} />, portalElement)}
  {ReactDom.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
  </Fragment>
  );
};

export default Modal