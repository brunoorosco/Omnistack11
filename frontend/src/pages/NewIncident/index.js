import React, { useState } from 'react';
import { Link, useHistory,  } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {

   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId')

    async function handleIncident(e) {

        e.preventDefault();

        const data = {
           title,
           description,
           value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            }

            )
            alert(`Incident Cadastrado com Sucesso`)
            history.push('/profile')
        } catch (error) {
            alert(`Erro ao cadastrar ${error}`)

        }
    }

    return (
        <div className="newIncident-container" >
            <div className="content" >
                <section >
                    <img src={logoImg} alt="Be The Hero" />
                    <h1> Cadastrar New Incident </h1>
                    < p > Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG. </p>
                    <Link className="back-link" to="/profile" >
                        <FiArrowLeft size={16} color="#e02041" />
                            Voltar
                            </ Link>
                </section>
                <form onSubmit={handleIncident}>
                    <input
                        type="text"
                        placeholder="Title Incident"
                       value={title}
                       onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Description"
                       value={description}
                       onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Value R$"
                       value={value}
                       onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit" > Cadastrar </button>
                </form>
            </div>
        </div >
    );
}