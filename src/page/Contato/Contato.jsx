import React from 'react'
import { Header, Footer } from '../../components/index'

export default function Contato() {
    return (
        <div>
            <Header></Header>
            <div className="container mt-3">
                <form>
                    <div className="form-group">
                        <label>Nome Completo</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nome Completo" />
                    </div>
                    <div className="form-group">
                        <label >Endereço de email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com" />
                    </div>

                    <div className="form-group">
                        <label >Solicitação</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}