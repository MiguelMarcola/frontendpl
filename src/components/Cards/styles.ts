import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h2`
    font-size: 2rem;
    color: var(--cor-primaria);
`;

export const AddNewCard = styled.button`
    background: var(--cor-destaque);
    color: var(--cor-branco);
    font-size: 1.2rem;
    padding: 13px 40px;
    border: none;
    border-radius: 8px; 
`;

export const CardsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    background: var(--cor-branco);
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    width: 21%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100px;
    background: var(--cor-cinza);
    border-radius: 50%;
    margin: 32px 0;
`;

export const Name = styled.p`
    width: 80%;
    font-size: 1rem;
    text-align: center;
    color: var(--cor-texto);
    border-top: solid var(--cor-cinza) 2px;
    padding-top: 20px;
    margin-bottom: 40px;
    
`;

export const ActionsContainer = styled.div`
    background: var(--cor-cinza);
    box-shadow: inset 0px 3px 6px #0000000F;
    width: 100%;
    padding: 13px 0;
    border-radius: 0 0 8px 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ActionDelete = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    
    &:hover {
        color: var(--cor-erro);
    } 
`;

export const ActionEdit = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    
    &:hover {
        color: var(--cor-destaque);
    } 
`;

export const Icon = styled.img`
    width: 16px;
    height: 16px;
`;

export const TitleAction = styled.p`
    margin-left: 5px;
`;