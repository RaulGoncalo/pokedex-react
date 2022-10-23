import React from 'react'

import styled from 'styled-components';


const Container = styled.div`
    padding: 1rem;
    margin-left: 1rem;
    user-select: none;
    font-family: "poppins", sans-serif;

    max-width: 350px;
    
    border-radius: 1rem;
    -webkit-box-shadow: 5px 5px 10px 5px rgba(163,163,163,0.38); 
    box-shadow: 5px 5px 10px 5px rgba(163,163,163,0.38);
`;

const ContainerInfos = styled.div`
    position: relative;
    top: -120px;
    
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
`;


const IdPokemon = styled.p`
    font-weight: 600;
    font-size: 1rem;
    color: #909090;
    margin-bottom: 0.8em;
`;

const NamePokemon = styled.p`
    font-size: 1.8rem;
    font-weight: 700;
    color: #303030;
    margin: 0;
`;

const TextInfo = styled.p`
    font-weight: 500;
    font-size: 0.9em;
    color: #909090;
    margin: 0;
    text-align: center;
`;


const ContainerTypes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Type = styled.p`
    background-color: #75b3dd;
    padding: 0.4em 0.6em;
    border-radius: 0.4em;
    color: #02166e;
    font-size: 1em;
    font-weight: 700;
    margin: 1em;
`;


const SubTitle = styled.p`
    font-size: 1rem;
    font-weight: 700;
    color: #303030;
    margin: 1rem;
`;

const ContainerAbilites = styled.div`
    display: flex;
`;

const Abilites = styled.p`
    padding: 0.6em 1em;
    border: 1px solid #a3a3a3;
    border-radius: 4em;
    font-size: 1em;
    font-weight: 500;
    margin: 0 1em;
`;

export default function Stage() {
    return (
        <Container>
            <ContainerInfos>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/395.svg" style={{ marginBottom: '20px', width: '60%' }} />
                <IdPokemon>#395</IdPokemon>
                <NamePokemon>Empoleon</NamePokemon>
                <TextInfo>Emperar Pokemon</TextInfo>

                <ContainerTypes id="types">
                    <Type>WATER</Type>
                    <Type style={{ backgroundColor: '#a7a7a7', color: '#525252fa' }}>STELL</Type>
                </ContainerTypes>

                <SubTitle>POKÉDEX ENTRY</SubTitle>
                <TextInfo id="desc">Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto</TextInfo>
                <SubTitle>ABILITES</SubTitle>

                <ContainerAbilites>
                    <Abilites>Torrent</Abilites>
                    <Abilites>Defiant</Abilites>
                </ContainerAbilites>
                <div>
                    <p>Torrent</p>
                    <p>1,7m</p>

                    <p>Weigth</p>
                    <p>84.5Kg</p>

                    <p>Weaknesses</p>
                    <p>icon icon icon icon</p>

                    <p>Base EXP</p>
                    <p>239</p>
                </div>
                <h3>STATS</h3>
                <div>
                    <div>
                        <p>HP</p>
                        <p>84</p>
                    </div>
                    <div>
                        <p>ATK</p>
                        <p>86</p>
                    </div>
                    <div>
                        <p>DEF</p>
                        <p>88</p>
                    </div>
                    <div>
                        <p>SPA</p>
                        <p>111</p>
                    </div>
                    <div>
                        <p>SPO</p>
                        <p>101</p>
                    </div>
                    <div>
                        <p>SPD</p>
                        <p>60</p>
                    </div>
                    <div>
                        <p>TOT</p>
                        <p>530</p>
                    </div>
                </div>

                <h3>EVOLUTION</h3>
                <div>
                    <div>
                        <img />
                    </div>
                    <p>Lvl 16</p>
                    <div>
                        <img />
                    </div>
                    <p>Lvl 36</p>
                    <div>
                        <img />
                    </div>
                </div>

                <div>
                    <button id="before">Voltar</button>
                    <button id="after">Próximo</button>
                </div>
            </ContainerInfos>
        </Container>
    )
}
