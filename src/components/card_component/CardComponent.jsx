import { Card } from "react-bootstrap";
import ButtonComponent from "../button_component/ButtonComponent";
import { Link } from "react-router-dom";

export default function CardComponent({
  variant,
  image,
  title,
  text,
  link,
  icon,
  style,
  buttonLabel,
}) {
  return (
    <Link to={link}>
      <Card style={style}>
        <Card.Img variant={variant} src={image} alt="" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <div>
            {icon}
            {buttonLabel && (
              <ButtonComponent
                variant="primary"
                size="sm"
                label={buttonLabel}
                icon={icon}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
