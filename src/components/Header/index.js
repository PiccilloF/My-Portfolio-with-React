export default function Header() {
    return (
        <div className="header">
            <h1 className="header-title">Ma page d'accueil</h1>
            <a href="/" className="picture">Ma photo</a>
            <div className="Nav-menu">
                <button className="home-button">Accueil</button>
                <button className="project-button">Mes projets</button>
            </div>
        </div>
    )
}