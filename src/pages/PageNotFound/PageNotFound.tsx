import './PageNotFound.css'

const PageNotFound = () => {

    return (
        <div className='pageNotFoundContainer'>
            <h1 className="image-text">Oops!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <p>The page you are looking for does not exist...</p>
            <p>If somehthing's missing, feel free to add you own recipe!</p>
            <a href="/"><button>BACK TO HOMEPAGE</button></a>
        </div>
    );
}

export default PageNotFound