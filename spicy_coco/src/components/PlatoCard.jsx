export default function PlatoCard({src, name, description, descrption2}){
    return (
        <div className="row my-2">
            <div className="col-12">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                            src={src}
                            alt={name}
                            className="img-fluid rounded-start"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><b>{name}</b></h5>
                                <p className="card-text">{description}</p>
                                <p className="card-text">
                                    <small className="text-body-secondary">{descrption2}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}