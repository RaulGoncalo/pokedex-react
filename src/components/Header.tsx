import React from 'react'
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import styled from 'styled-components';

const Conatiner = styled.div`
    margin: 1.4rem 1.8rem;
    padding: 0 1rem;
    border-radius: 0.6rem;

    display: flex;
    align-items: center;
    -webkit-box-shadow: 5px 5px 10px 5px rgba(163,163,163,0.38); 
    box-shadow: 5px 5px 10px 5px rgba(163,163,163,0.38);
`;

const Title = styled.p`
    font-size: 2rem;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:#303030;
`;

export default function Header() {
    return (
        <Conatiner>
            <MdOutlineCatchingPokemon style={{ color: '#ff2020', width: '2.6rem', height: '2.6rem' }} />
            <Title>Pokédex</Title>
        </Conatiner >
    )
}
