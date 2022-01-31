import React from 'react'
import '../Footer/style/Footer.css'
import {Link} from 'react-router-dom'


export default function Footer() {
    return (
        <div className="mainFooter">
        <footer className="pt-4 my-md-5 pt-md-5 border-top ">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src="../../../ativo17.png" alt="" />
                    <small className="d-block mb-3">&copy; 2017–2022</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Principais Páginas</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a to="#"className="link-secondary text-decoration-none" href="#">Home</a></li>
                        <li className="mb-1"><a to="#"className="link-secondary text-decoration-none" href="#">Serviços</a></li>
                        <li className="mb-1"><a to="#"className="link-secondary text-decoration-none" href="#">Projetos</a></li>
                        <li className="mb-1"><a to="#"className="link-secondary text-decoration-none" href="#">Contato</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Nossas Redes Sociais</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a href='https://www.instagram.com/diegobf_/' className="link-secondary text-decoration-none"><i class="fab fa-instagram"></i> Instagram</a></li>
                        <li className="mb-1"><a href='https://api.whatsapp.com/send?phone=5511910732978&text=Gostaria%20de%20Saber%20Mais' className="link-secondary text-decoration-none"><i class="fab fa-whatsapp"></i> Whatsapp</a></li>
                        <li className="mb-1"><a to="#" className="link-secondary text-decoration-none"><i class="fab fa-twitch"></i> Twitch</a></li>
                        <li className="mb-1"><a to="#" className="link-secondary text-decoration-none"><i class="fab fa-twitter"></i> Twitter</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Informações para Contato</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><i class="fas fa-phone"></i><span> 11 91073-2978 <em>Atendimento</em></span></li>
                        <li className="mb-1"><i class="fas fa-phone"></i><span> 11 97102-3211 <em>Suporte</em></span></li>
                        <li className="mb-1"><i class="fas fa-envelope"></i><span> Email: dev.ghostbit@outlook.com</span></li>
                        <li className="mb-1"><i class="fas fa-map-marker-alt"></i> <span> 07914080 Jardim Primavera. Francisco Morato SP</span></li>
                        <br></br>
                    </ul>
                </div>
            </div>
        </footer>
        </div>
    )
}