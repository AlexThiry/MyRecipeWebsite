import "./Header.css"

const Header = () => {
    const tabs = ["Image","Popular", "Fast", "Simple", "Add your own", "Log-In", "Sign-Up"]

    return (
        <div className="headerContainer">
            {tabs.map(tab => tab == "Image" ? <a href="index.html"><img className="logo" src="src/images/Logos/AT Recipes-logos_transparent.png" alt="Cooking hat logo" /></a>:<button className={`headerBtn ${tab}`} key={tab}>{tab}</button>)}
        </div>
    );
}

export default Header