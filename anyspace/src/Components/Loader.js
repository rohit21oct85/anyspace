import React from "react";
import {Spinner} from "react-bootstrap"

const Loader = (props) => {

    return <div className={`loader ${props.type}`}>
        <Spinner animation="grow" role="status"  variant="danger">
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
}

export default Loader;