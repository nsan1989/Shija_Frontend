import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ButtonComponent({ variant, size, label, link, style, icon, onClick }) {
    return (
        <Button
            variant={variant}
            size={size}
            as={link ? Link : "button"}
            to={link}
            style={style}
            onClick={onClick}
        >
            {label}
            &nbsp;
            {icon && <span>{icon}</span>}
        </Button>
    )
}