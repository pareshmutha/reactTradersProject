import React from 'react';
import {Toast} from 'react-bootstrap';

const ToastMessage = (props) => {
    const {type = 'warning', msg = ''} = props;
    return (
        <Toast className="d-inline-block m-1" bg={type} autohide delay={1000}>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            </Toast.Header>
            <Toast.Body className='text-white'>
                {msg}
            </Toast.Body>
        </Toast>
    )
}

export default ToastMessage;