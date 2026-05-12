import Layout from "../components/Layout";
import title from "../assets/letra.svg"

export default function HomePage(){
    return (
        <>
        <Layout>
            <div className="row title-row d-flex justify-content-center">
                <img src={title} alt="title" className="main-title-pc"/>
            </div>
            <h3 className="text-center">Brunch en Gran Vía, Madrid</h3>
        </Layout>
        </>
    )
}