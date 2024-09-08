import './resourcesStyles/HeroStyle.css';

function HeroStyle(props) {
    const { children } = props
    return (
        <div className='hero' > {children}</div>

    )

}
export default HeroStyle