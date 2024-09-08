import './resourcesStyles/CardStyle.css';

function CardStyle(props) {
    const { children } = props
    return (
        <div className='hero' > {children}</div>

    )

}
export default CardStyle