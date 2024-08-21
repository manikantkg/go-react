import React, { Fragment, useState } from "react";
import './HelloWorld.css';

function HelloWorld(props) {
    const [isTrue, setIsTrue] = useState(true)
    const toggleTrue = () => {
        if (isTrue){
            setIsTrue(false)
            return
        }
        setIsTrue(true)
    }
    return (
        <Fragment>
            <hr />
            <h1 className="h1-blue">{props.msg}</h1>
            <hr />
            {isTrue &&

                <Fragment>
                    <p>The current value is True</p>
                </Fragment>
            }
            <hr />
            {isTrue
                ? <p>isTrue</p>
                :<p>isFalse</p>
            }
            <hr />
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle is true</a>
        </Fragment>
    )
}

export default HelloWorld;