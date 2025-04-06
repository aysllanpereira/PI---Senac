import { NavBar } from "../../assets/Components/NavBar/navBar";
import { Cards } from "../../assets/Components/Cards/cards"
import Styles from "../Home/home.module.css";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className={Styles.home}>
        <section>
        <div>
          <form action="#" className={`d-flex align-items-center gap-3`}>
            <input
              type="text"
              name="pesquisa"
              id="pes"
              className={`form-control`}
              placeholder="🔍 Buscar restaurantes, culinárias ou pratos típicos"
            />
            <button type="submit">
              <i class="bi bi-filter"></i>
            </button>
          </form>
        </div>
        </section>

        <section>
          <div className={Styles.sec}>
            <div className={Styles.cooking}>
              <p>
                <i className="bi bi-egg-fried"></i> Culinária
              </p>
            </div>
            <div className={Styles.timeOperation}>
              <p >
                <i className="bi bi-clock"></i> Aberto agora
              </p>
            </div>
          </div>

          <div className={Styles.order}>
            <p>Restaurantes próximos a você</p>
            <p><i class="bi bi-geo-alt-fill"></i> Ordenado por distância</p>
          </div>
        </section>
      <Cards />
      </div>
    </>
  );
};
