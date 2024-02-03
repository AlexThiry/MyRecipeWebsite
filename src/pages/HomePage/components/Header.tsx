import "./Header.css"

const Header = () => {
    const tabs = ["Image","Popular", "Fast", "Simple", "Add Your Own", "Log-In", "Sign-Up"]

    return (
        <div className="headerContainer">
            {tabs.map(tab => tab == "Image" ? <a key={tab} href="index.html"><img className="logo" src="src/images/Logos/AT Recipes-logos_transparent.png" alt="Cooking hat logo" /></a>
            :
            <a href={`/${tab.replace(/\s+/g, '')}`}><button className={`headerBtn ${tab}`} key={tab}>{tab}</button></a>)}
        </div>
    );
}

export default Header