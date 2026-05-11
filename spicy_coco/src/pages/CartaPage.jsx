import Layout from "../components/Layout";

export default function CartaPage(){
    return (
        <>
        <Layout>
            <div className="container">
                <div className="text-center my-3 py-2">
                    <h1 class="text-primary">Nuestros Platos</h1>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                        <div class="card mb-3" style={{maxwidth: "540px"}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://placehold.co/600x400" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Nombre del Plato</h5>
                                        <p class="card-text">Descripción del plato como ingredientes, preparación y algunas cosita más.</p>
                                        <p class="card-text"><small class="text-body-secondary">Otro tipo de texto (alérgenos o cosas así)</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                        <div class="card mb-3" style={{maxwidth: "540px"}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://placehold.co/600x400" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Nombre del Plato</h5>
                                        <p class="card-text">Descripción del plato como ingredientes, preparación y algunas cosita más.</p>
                                        <p class="card-text"><small class="text-body-secondary">Otro tipo de texto (alérgenos o cosas así)</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                        <div class="card mb-3" style={{maxwidth: "540px"}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://placehold.co/600x400" class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Nombre del Plato</h5>
                                        <p class="card-text">Descripción del plato como ingredientes, preparación y algunas cosita más.</p>
                                        <p class="card-text"><small class="text-body-secondary">Otro tipo de texto (alérgenos o cosas así)</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}