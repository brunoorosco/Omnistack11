import React from 'react';
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span> Bem Vindo, APAD</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo Caso
                </Link>
                <button type="button">
                    <FiPower size={16} color="#e02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Description teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={16} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Description teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={16} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Description teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={16} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>

    );
}