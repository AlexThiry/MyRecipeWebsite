import "./Header.css"

const Header = () => {
    const tabs = ["Popular", "Fast", "Simple", "Add your own", "Sign-Up", "Log-In"]

    return (
        <div className="headerContainer">
            {tabs.map(tab => <button className={`headerBtn ${tab}`}>{tab}</button>)}
        </div>
    );
}

export default Header