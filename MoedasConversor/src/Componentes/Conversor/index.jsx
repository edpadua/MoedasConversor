import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
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
        console.log("entrada",entrada);
        console.log("dtaxaDeConversao",taxaDeConversao);
        setSaida(entrada * taxaDeConversao);
      }
    
      function alternar() {
        var temp = moedaOrigem;
        setMoedaOrigem(moedaFinal);
        setMoedaFinal(temp);
      }

    return (
        <div>
            <label>Valor</label>
            <input type="text" onChange={(e) => setEntrada(e.target.value)}
                placeholder="Digite o valor" ></input>
            <label>Converter de</label>
            <Dropdown options={opcoes}
                onChange={(e) => { setMoedaOrigem(e.value) }}
                value={moedaOrigem} placeholder="De" />
            <HiSwitchHorizontal size="30px"
                onClick={() => { alternar() }} />
            <Dropdown options={opcoes}
                onChange={(e) => { setMoedaFinal(e.value) }}
                value={moedaFinal} placeholder="To" />

<button onClick={()=>{converter()}}>Converter</button>
        <h2>Converted Amount:</h2>
        <p>{entrada+" "+moedaOrigem+" = "+saida.toFixed(2) + " " + moedaFinal}</p>
        </div>
    )
}

export default Conversor
