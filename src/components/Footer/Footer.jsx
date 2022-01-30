import React from 'react'
import '../Footer/style/Footer.css'
import {Link} from 'react-router-dom'


export default function Footer() {
    return (
        <div className="mainFooter">
        <footer className="pt-4 my-md-5 pt-md-5 border-top ">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19" />
                    <small className="d-block mb-3 text-muted">&copy; 2017–2022</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Redes Sociais</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"> <i class="fab fa-instagram"></i> <a href='https://www.instagram.com/diegobf_/' className="link-secondary text-decoration-none">Instagram</a></li>
                        <li className="mb-1"> <i class="fab fa-whatsapp"></i> <a href='https://api.whatsapp.com/send?phone=5511910732978&text=Gostaria%20de%20Saber%20Mais' className="link-secondary text-decoration-none">Whatsapp</a></li>
                        <li className="mb-1"> <i class="fab fa-twitch"></i> <a to="#" className="link-secondary text-decoration-none">Twitch</a></li>
                        <li className="mb-1"> <i class="fab fa-twitter"></i> <a to="#" className="link-secondary text-decoration-none">Twitter</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Resource</Link></li>
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Resource name</Link></li>
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Another resource</Link></li>
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Final resource</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>informações para Contato</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><i class="fas fa-phone-alt"></i>(11) 9 1073-2978</li>
                        <li className="mb-1"><i class="fal fa-envelope"></i> Email: dev.ghostbit@outlook.com</li>
                       
                    </ul>
                </div>
            </div>
        </footer>
        </div>
    )
}