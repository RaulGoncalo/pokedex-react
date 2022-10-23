import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    padding: 0.6rem;
    border-radius: 0.8rem;
    user-select: none;
    height: 180px;
    width: 288px;
    align-items: center;
    margin-top: 4rem;
    font-family: "poppins", sans-serif;

    display: flex;
    justify-content: flex-end;
    flex-flow: column nowrap;
    
 
    -webkit-box-shadow: 5px 5px 10px 5px rgba(163,163,163,0.38); 
    box-shadow: 5px 5px 10px 5px rgba(163,163,163,0.38);
`;

const Gif = styled.img`
    position: relative;
    top: -8px;

`;

const ContainerTypes = styled.div`
    display: flex;
    justify-content: space-around;
`;

const NumberIdPokemon = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
    color: #909090;
    margin: 0.8em;
`;

const NamePokemon = styled.p`
    margin: 0;
    font-size: 1.8rem;
    font-weight: 700;
    color: #656565;
`;

const Type = styled.p`
    background-color: #75dd75;
    padding: 0.4em 0.6em;
    border-radius: 0.4em;
    color: #026e02;
    font-size: 1em;
    font-weight: 700;
    margin: 1em;
`;


export default function CardsPokemons() {
    return (
        <Container id="card">
            <Gif src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/389.gif" />
            <NumberIdPokemon>Nº387</NumberIdPokemon>
            <NamePokemon>Turtwig</NamePokemon>
            <ContainerTypes id="type">
                <Type>GRASS</Type>
                <Type style={{ backgroundColor: '#ffb56f', color: '#cc871ffb' }}>GROUND</Type>
            </ContainerTypes>

        </Container>
    )
}
