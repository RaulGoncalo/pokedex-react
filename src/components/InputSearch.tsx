import React from 'react'
import styled from 'styled-components';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

const Conatiner = styled.div`
    border-radius: 0.3rem;

    display: flex;
    max-width: 1050px;
    align-items: center;
    
    -webkit-box-shadow: 5px 5px 10px 5px rgba(163,163,163,0.38); 
    box-shadow: 5px 5px 10px 5px rgba(163,163,163,0.38);
`;

const Input = styled.input`
    display: flex;
    
    flex:1;
    height: 90px;
    border:none;
    padding: 0 1rem;
    
    font-size: 1.4rem;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:#303030;

    &:focus{
        box-shadow: 0 0 0 0;
        border:none;
        outline: 0;
    }
`;

const Button = styled.button`
    background-color: #ff4040;
    border: none;
    border-radius: 0.6rem;
    padding: 0.3rem;
    margin-right: 1rem;

    -webkit-box-shadow: 3px 3px 8px 3px rgba(255, 64, 64,0.38); 
    box-shadow: 3px 3px 8px 3px rgba(255, 64, 64,0.38);
    
    &:hover{
        background-color: rgb(255, 64, 64, 0.7);
    }
`;

export default function InputSearch() {
    return (
        <Conatiner>
            <Input />
            <Button><MdOutlineCatchingPokemon style={{ color: '#fff', width: '2rem', height: '2rem' }} /></Button>
        </Conatiner>
    )
}
