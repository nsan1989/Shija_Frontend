import { useEffect, useState } from "react";
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
  showImagePlaceholder = false,
}) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [image]);

  const card = (
    <Card className={className} style={style}>
      {showImagePlaceholder ? (
        <div className="card-image-frame">
          {image && !imageFailed ? (
            <Card.Img
              variant={variant}
              src={image}
              alt=""
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="card-image-skeleton" aria-label="Image unavailable" />
          )}
        </div>
      ) : (
        image && <Card.Img variant={variant} src={image} alt="" />
      )}
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
