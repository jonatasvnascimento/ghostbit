import React from 'react'
import '../Footer/style/Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className="container">
        <footer className="pt-4 my-md-5 pt-md-5 border-top ">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19" />
                    <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><Link to="#" className="link-secondary text-decoration-none">Cool stuff</Link></li>
                        <li className="mb-1"><Link to="#" className="link-secondary text-decoration-none" href="#">Random feature</Link></li>
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Team feature</Link></li>
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Stuff for developers</Link></li>
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Another one</Link></li>
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Last time</Link></li>
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
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Team</Link></li>
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Locations</Link></li>
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Privacy</Link></li>
                        <li className="mb-1"><Link to="#"className="link-secondary text-decoration-none" href="#">Terms</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
        </div>
    )
}