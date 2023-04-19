import React from 'react'

import './Cabecalho.css'

import { FaMoneyBillAlt } from 'react-icons/fa';

function Cabecalho() {
    return (
        <>
            <header className='header-conversor'>
                <nav className="navbar">
                    <div className="navbar-container">
                        <FaMoneyBillAlt style={{ fontSize: '40px' }} />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Cabecalho
