import './resourcesStyles/Navigation.css';

function Navigation(props) {
    const { children } = props
    return (
        <div className="navigation"> {children}</div>

    )

}
export default Navigation