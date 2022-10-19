import React from 'react'
import Header from '../components/Header'
export default function PokedexPage() {
    return (
        <>
            <Header />
            <body>
                <div>
                    <div id='search'>
                        <label>Pesquise um pokemon</label>
                        <input />
                    </div>

                    <div id="fromTo">
                        <label>De</label>
                        <input type="number" />
                        <label>até</label>
                        <input type="number" />
                    </div>

                    <div id="filter">
                        <div>
                            <select id="type">Type</select>
                        </div>

                        <div>
                            <select id="Weaknesses"></select>
                        </div>

                        <div>
                            <select id="Ability"></select>
                        </div>

                        <div>
                            <select id="Heigth"></select>
                        </div>

                        <div>
                            <select id="Weigth"></select>
                        </div>

                        <button>Clear</button>
                    </div>

                    <div id="contentPokemon">
                        <div id="card">
                            <img />
                            <p>Nº387</p>
                            <h1>Turtwig</h1>
                            <div id="types">
                                <div id="type">
                                    <p>GRASS</p>
                                    <p>GROUND</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="showcase">
                    <div>
                        <img />
                        <div id="icon">Feminino</div>
                        <div id="icon">Masculino</div>
                    </div>

                    <p>#395</p>
                    <h1>Empoleon</h1>
                    <p>Emperar Pokemon</p>

                    <div id="typeShowcase">
                        <p>WATER</p>
                        <p>STELL</p>
                    </div>

                    <h3>POKÉDEX ENTRY</h3>
                    <p id="desc">Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto</p>
                    <h4>Abilites</h4>
                    <div id="abilities">
                        <p>Torrent</p>
                        <p>Defiant</p>
                    </div>
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
                </div>
            </body>

        </>
    )
}
