import Styles from "../NavBar/navbar.module.css"

export const NavBar = () => {
    return (
        <>
        <header className={Styles.contHeader}>
            <nav>
                <div className={Styles.conteiner}>
                    <h1>RestauranteFácil</h1>
                    <div className={Styles.contNav}>
                        <ul>
                            <li><i class="bi bi-bookmark"></i> Salvos</li>
                            <li><i class="bi bi-person-circle"></i> Perfil</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

