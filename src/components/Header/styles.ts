import styled from 'styled-components';

import bgSearch from '../../assets/fundo-busca.png'

export const Head = styled.div`
    width: 100%;
    height: 64px;
    background: linear-gradient(to Right, #5F1478, #AE276F);
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 192px;
    padding: 24px;
`;

export const Container = styled.div`
    width: 100%;
    height: 261px;
    background: transparent url(${bgSearch}) no-repeat padding-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchContainer = styled.div`
    background-color: var(--cor-branco);
    border: none;
    border-radius: 8px;
    width:80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 60px;
`;

export const SearchInput = styled.input`
    float:left;
    background-color:transparent;
    font-style:italic;
    font-size:18px;
    border:none;
    height:75px;
    width: 90%;
    padding-left: 2%;
`;

export const Button = styled.button`
    background: none;
    border: none;
    padding-right: 2%;
`;

export const Lupa = styled.img`
    width: 49px;
    height: 49px;
    cursor: pointer;
`;

