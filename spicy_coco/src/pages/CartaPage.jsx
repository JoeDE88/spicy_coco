import Layout from "../components/Layout";
import PlatoCard from "../components/PlatoCard";
import { platosList } from "../lists/platosList";

export default function CartaPage(){
    return (
        <>
        <Layout>
            <div className="container">
                <div className="text-center my-3 py-2">
                    <h1 class="text-primary">Nuestros Platos</h1>
                </div>
                {platosList.map((plato) => {
                    return (
                        <PlatoCard
                        src={plato.src}
                        key={plato.name}
                        name={plato.name}
                        description={plato.description}
                        descrption2={plato.descrption2}
                        />
                    )
                })}
            </div>
        </Layout>
        </>
    )
}