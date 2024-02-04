import "./Header.css"

const Header = () => {
    const tabs = ["Image","Popular", "Fast", "Simple", "Add Your Own", "Log-In", "Sign-Up"]

    return (
        <div className="headerContainer">
            {tabs.map(tab => tab == "Image" ? <a key={tab} href="/"><img className="logo" src="src/images/Logos/AT Recipes-logos_transparent.png" alt="Cooking hat logo" /></a>
            :
            <a key={tab} href={`/${tab.replace(/\s+/g, '-')}`}><button className={`headerBtn ${tab}`}>{tab}</button></a>)}
        </div>
    );
}

export default Header