import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function newIncident() {
    return (
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar New Incident</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/profile" >
                        <FiArrowLeft size={16} color="#e02041" />
                   Voltar
                    </ Link>
                </section>
                <form>
                    <input placeholder="Title Incident" />
                    <textarea placeholder="Description" />
                    <input placeholder="Value R$" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div >
    );
}