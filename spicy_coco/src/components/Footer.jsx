export default function Footer(){
    return (
        <>
        <footer className="bd-footer">
            <div className="container py-3 px-3">
                <div className="row py-2">
                    <h1 className="text-center text-secondary mb-2">Spicy Coco</h1>
                </div>
                <div className="row">
                    <div className="col-4 text-center text-secondary">
                        <i class="bi bi-whatsapp"></i>
                        <p className="icon-text text-secondary">Whatsapp</p>
                    </div>
                    <div className="col-4 text-center text-secondary">
                        <i class="bi bi-instagram"></i>
                        <p className="icon-text text-secondary">Instagram</p>
                    </div>
                    <div className="col-4 text-center text-secondary">
                        <i class="bi bi-envelope"></i>
                        <p className="icon-text text-secondary">E-mail</p>
                    </div>
                </div>
                <div className="row mt-5 text-center">
                    <div className="col-4">
                        <p className="footer-text text-secondary">Privacidad</p>
                    </div>
                    <div className="col-4">
                        <p className="footer-text text-secondary">Aviso Legal</p>
                    </div>
                    <div className="col-4">
                        <p className="footer-text text-secondary">Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}