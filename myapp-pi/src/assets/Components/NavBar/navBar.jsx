import Styles from "../NavBar/navbar.module.css"

export const NavBar = () => {
    return (
        <>
        <header className={Styles.contHeader}>
            <nav>
                <div className={Styles.conteiner}>
                    <h1>Logo</h1>
                    {/* <div className={Styles.contUl}>
                        <ul>
                            <li>Home</li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </header>
        </>
    )
}

