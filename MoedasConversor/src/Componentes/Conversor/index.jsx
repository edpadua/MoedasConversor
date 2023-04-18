import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { HiSwitchHorizontal } from 'react-icons/hi';

import './Conversor.css'

function Conversor() {


    const [opcoes, setOpcoes] = useState([]);
    const [moedaOrigem, setMoedaOrigem] = useState("usd");
    const [moedaFinal, setMoedaFinal] = useState("brl");
    const [dados, setDados] = useState([]);
    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);

    useEffect(() => {
        Axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${moedaOrigem}.json`)
            .then((res) => {

                setDados(res.data[moedaOrigem]);
            })
    }, [moedaOrigem]);


    useEffect(() => {
        setOpcoes(Object.keys(dados));
        converter();
    }, [dados])


    function converter() {
        var taxaDeConversao = dados[moedaFinal];
        console.log("entrada", entrada);
        console.log("dtaxaDeConversao", taxaDeConversao);
        setSaida(entrada * taxaDeConversao);
    }

    function alternar() {
        var temp = moedaOrigem;
        setMoedaOrigem(moedaFinal);
        setMoedaFinal(temp);
    }

    return (
        <div className='container-conversor'>
            <div className='container-input'>
                <label>Valor:</label>
                <input className='form-control' type="text" onChange={(e) => setEntrada(e.target.value)}
                    placeholder="Digite o valor" >
                </input>
            </div>

            <div className='container-input'>
                <label>Converter de:</label>
                <Dropdown options={opcoes}
                    onChange={(e) => { setMoedaOrigem(e.value) }}
                    value={moedaOrigem} placeholder="De" />
            </div>
            <div className='container-switch'>
                <HiSwitchHorizontal size="30px"
                    onClick={() => { alternar() }} />
            </div>

            <div className='container-input'>
                <label>Para:</label>
                <Dropdown options={opcoes}
                    onChange={(e) => { setMoedaFinal(e.value) }}
                    value={moedaFinal} placeholder="To" />
            </div>

            <div className='container-button'>
                <button className='btn' onClick={() => { converter() }}>Converter</button>
            </div>

            <h2>Valor convertido:</h2>
            <div className='saida'>
                <p>{entrada + " " + moedaOrigem + " = " + saida.toFixed(2) + " " + moedaFinal}</p>
            </div>

        </div>
    )
}

export default Conversor
