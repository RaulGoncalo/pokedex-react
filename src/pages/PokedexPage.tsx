import React from 'react'

import Header from '../components/Header';
import InputSearch from '../components/InputSearch';
import Filter from '../components/Filter';
import CardsPokemons from '../components/CardsPokemons';
import Stage from '../components/Stage';

export default function PokedexPage() {
    return (
        <>
            <Header />
            <body style={{
                display: 'flex',
                justifyContent: 'center',
                padding: "4rem",
            }}>
                <div>

                    <InputSearch />
                    <Filter />

                    <div id="contentPokemon"
                        style={
                            {
                                display: 'flex',
                                flexFlow: 'row wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '2rem',
                                gap: '20px',
                                maxWidth: '1050px'
                            }
                        }>
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                        <CardsPokemons />
                    </div>
                </div>

                <Stage />
            </body>

        </>
    )
}
