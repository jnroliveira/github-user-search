import React, { useState } from 'react';
import ButtonIcon from '../../core/components/ButtonIcon';
import { SearchResult } from '../../core/types/SearchResult'
import { toast } from 'react-toastify';
import './styles.css';
import dayjs from 'dayjs';
import ProductDescriptionLoader from './components/Loaders/ProductDescriptionLoader';
import ProductInfoLoader from './components/Loaders/ProductInfoLoader';

const Search = () => {

    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<SearchResult>();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);

        fetch(`https://api.github.com/users/${search}`)
            .then(response => {
                if (!response.ok) {
                    throw response
                }
                return response.json()
            })
            .then(userResponse => setUserData(userResponse))
            .catch(() => {
                toast.error('erro ao pesquisar usuário!');
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const createdAt = dayjs(userData?.created_at).format("DD/MM/YYYY");

    return (
        <div className="search-container">
            <div className="search-content">
                <h3 className="search-title">Encontre um perfil Github</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Usuário Github"
                        required
                        value={search}
                        onChange={handleChange}
                    />
                    <div className="btn-search">
                        <ButtonIcon text="Encontrar" />
                    </div>
                </form>
                {userData && (
                    <div className="user-info">
                        {isLoading ?
                            <div className="loaders">
                                <ProductDescriptionLoader />
                                <ProductInfoLoader />
                            </div>
                            : (
                                <>
                                    <img src={userData.avatar_url} className="img-profile" alt="Imagem do perfil" />

                                    <div className="btn-info">
                                        <a href={userData.html_url} target="_new">
                                            <ButtonIcon text="Ver perfil" />
                                        </a>
                                    </div>
                                    <div className="user-status">
                                        <span>Repositórios públicos: {userData.public_repos}</span>
                                        <span>Seguidores: {userData.followers}</span>
                                        <span>Seguindo: {userData.following}</span>
                                    </div>
                                    <div className="user-social">
                                        <h3 className="user-social-title">Informações</h3>
                                        <div><strong>Empresa: {userData.company}</strong></div>
                                        <div><strong>Website/Blog: {userData.blog}</strong></div>
                                        <div><strong>Localidade: {userData.location}</strong></div>
                                        <div><strong>Membro desde: {createdAt}</strong></div>
                                    </div>
                                </>
                            )}
                    </div>
                )}
            </div>
        </div>
    )
};

export default Search;