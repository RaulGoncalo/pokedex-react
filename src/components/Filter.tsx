import React from 'react'
import styled from 'styled-components';
import { RiRefreshFill } from 'react-icons/ri';

const FilterContainer = styled.div`
    margin: 1.4rem 1.8rem;
    border-radius: 0.3rem;

    max-width: 1050px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
`;

const Select = styled.select`
    width: 8.6rem;
    height: 3.4rem;
    margin-right:1em;
    margin-bottom: 1em;
    border: none;
    border-radius: 0.3rem;
    padding: 0.8em;
    font-size: 1rem;
    color: #7c7a7a;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    -webkit-box-shadow: 5px 5px 10px 5px rgba(163,163,163,0.38); 
    box-shadow: 5px 5px 10px 5px rgba(163,163,163,0.38);

    option{
        font-size: 1rem;
        border-radius: 0rem;
    }

    &:focus{
        border:none;
        outline: 0;
    }
`;

const Button = styled.button`
    background-color: #a3a3a3;
    border: none;
    border-radius: 0.6rem;
    padding: 0.3rem;
    margin-right:1em;
    margin-bottom: 1em;
    -webkit-box-shadow: 3px 3px 8px 3px rgba(163, 163, 163,0.38); 
    box-shadow: 3px 3px 8px 3px rgba(163, 163, 163,0.38);
    
    &:hover{
        background-color: rgb(163, 163, 163, 0.7);
    }
`;
export default function Filter() {
    return (
        <FilterContainer>
            <Select id="type">
                <option>Type</option>
                <option>Type1</option>
                <option>Type2</option>
                <option>Type3</option>
                <option>Type4</option>
                <option>Type5</option>
            </Select>
            <Select id="Weaknesses">
                <option>Weaknesses</option>
            </Select>
            <Select id="Ability">
                <option>Ability</option>
            </Select>
            <Select id="Heigth">
                <option>Heigth</option>
            </Select>
            <Select id="Weigth">
                <option>Weigth</option>
            </Select>
            <Button><RiRefreshFill style={{ color: '#fff', width: '2rem', height: '2rem' }} /></Button>
        </FilterContainer>
    )
}
