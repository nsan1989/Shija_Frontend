import { useState } from "react";
import { NavDropdown } from "react-bootstrap";

export default function HeaderWrapper( props ) {
    const [ show, setShow ] = useState( false );

    return (
        <NavDropdown
            {...props}
            show={show}
            onMouseEnter={() => setShow( true )}
            onMouseLeave={() => setShow( false )}
            onClick={() => setShow(!show)}
        >
            {props.children}
        </NavDropdown>
    )
}
