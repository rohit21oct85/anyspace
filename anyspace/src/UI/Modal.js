import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";



function ModalBox(props) {
    // eslint-disable-next-line
    const [show, setShow] = useState(false);

    const handleClose = () => props.showModalFunction()
    // eslint-disable-next-line
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>


            <Modal show={props.showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {props.header}
                    </Modal.Title>
                </Modal.Header>
                {props.children}

        {(props.cancelBtnText ||props.confirmBtnText) &&
                <Modal.Footer>

                    {props.cancelBtnText &&
                        <Button variant="secondary" onClick={props.cancelAction}>
                            {props.cancelBtnText}
                        </Button>
                    }
                    {props.confirmBtnText &&
                        <Button variant="primary" onClick={props.confirmAction}>
                            {props.confirmBtnText}
                        </Button>
                    }
                </Modal.Footer>
}

            </Modal>
        </React.Fragment>
    );
}

export default ModalBox;