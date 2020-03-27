import React from 'react';
import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span> Bem Vindo, APAD</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo Caso
                </Link>
                <button type="button">
                    <FiPower size={16} color="#e02041" />
                </button>
            </header>


        </div>
        
    );
}