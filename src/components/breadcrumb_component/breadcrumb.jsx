import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BreadcrumbComponent = ({ items }) => {
    return (
        <Breadcrumb>
            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                    <Breadcrumb.Item key={index} active={isLast}>
                        {!isLast ? (
                            <Link to={item.href} className="flex items-center gap-1">
                                {item.icon && item.icon}
                                {item.label}
                            </Link>
                        ) : (
                            <span className="flex items-center gap-1 text-gray-500">
                                {item.icon && item.icon}
                                {item.label}
                            </span>
                        )}
                    </Breadcrumb.Item>
                )
            })}
        </Breadcrumb>
    )
}

BreadcrumbComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string,
            icon: PropTypes.element,
        })
    ).isRequired,
}

export default BreadcrumbComponent
