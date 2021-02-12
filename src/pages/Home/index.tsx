import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.css'

const Home = () => (
    <div className="home-container">
        <h1 className="home-content">Desafio do Capítulo 3, <br /> Bootcamp DevSuperior</h1>
        <p className="home-text">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /><br />
            Favor observar as instruções passadas no capítulo sobre a <br />elaboração deste projeto.<br /><br />
            Este design foi adaptado a partir de Ant Design System for Figma, de <br /> Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
        </p>
        <Link to="/search">
            <ButtonIcon text="Começar" />
        </Link>
    </div>
);

export default Home;