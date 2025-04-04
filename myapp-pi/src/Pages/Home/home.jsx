import { Maps } from "../../assets/Components/Maps/maps"
import { NavBar } from "../../assets/Components/NavBar/navBar"
import Styles from "../Home/home.module.css"

export const Home = () => {
    return (
        <>
            <NavBar />
            <div className={Styles.home}>
                <h1>Pesquisar Restaurantes e Lanchonetes</h1>
                <div>
                    <form action="#" className={`d-flex align-items-center gap-3`}>
                        <input
                            type="text"
                            name="pesquisa"
                            id="pes"
                            className={`form-control`}
                            placeholder="🔍 Pesquisar Funcionários"
                        />
                        <button type="submit" variant="primary">Submit</button>
                    </form>
                </div>
            <Maps />
            </div>
        </>
    )
}