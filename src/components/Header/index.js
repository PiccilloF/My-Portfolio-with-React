export default function Header() {
    return (
        <div className="p-2 flex flex-col items-center">
            <h1 className="text-4xl font-bold p-3">
                Ma page d'accueil
            </h1>
            <a href="/" className="p-2">Ma photo</a>
            <div className="p-2">
                <button className="button">Accueil</button>
                <button className="button">Mes projets</button>
            </div>
        </div>
    )
}