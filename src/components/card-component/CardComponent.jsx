import { Card } from "react-bootstrap";
import ButtonComponent from "../button-component/ButtonComponent";
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
  className,
}) {
  const card = (
    <Card className={className} style={style}>
      {image && <Card.Img variant={variant} src={image} alt="" />}
      {(title || text || icon || buttonLabel) && (
        <Card.Body>
          {title && <Card.Title>{title}</Card.Title>}
          {text && <Card.Text>{text}</Card.Text>}
          {(icon || buttonLabel) && (
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
          )}
        </Card.Body>
      )}
    </Card>
  );

  return (
    link ? <Link to={link}>{card}</Link> : <div>{card}</div>
  );
}
