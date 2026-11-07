export default function SectionHeaderComponent({
    title,
    subtitle,
    style,
    titleStyle,
    subtitleStyle,
}) {
    return (
        <div className={style}>
            <h1 style={titleStyle}>{title}</h1>
            <p style={subtitleStyle}>{subtitle}</p>
        </div>
    )
}