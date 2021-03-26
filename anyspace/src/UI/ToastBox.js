import React from "react";
import { Toast } from "react-bootstrap"


const ToastBox = (props) => {
    return (

        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'absolute',
                minHeight: '100px',
                right: "20px",
                top: "76px"
            }}
        >
            <Toast show={props.showtoast} onClose={props.closeToast}>
                <Toast.Header>
                    <div className="toaststatus" style={{ background: props.statusColor }}></div>
                    <strong className="mr-auto">{props.heading}</strong>

                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
            </Toast>

        </div>
    )
}

export default ToastBox;
