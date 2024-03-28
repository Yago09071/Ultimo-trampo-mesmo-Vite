import style from "./Calc.module.css"
import Menu from "./components/Menu"

import {useEffect, useState } from "react"

export const Calc = () => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMulti, setRespMulti] = useState()
    const [respDiv, setRespDiv] = useState()

    // useEffect(()=> {
    //    if(numero1 !== undefined && numero2 !== undefined){
    //    setRespSoma(parseFloat(numero1) + parseFloat(numero2))
    //    setRespSub(parseFloat(numero1) - parseFloat(numero2))
    //    setRespMulti(parseFloat(numero1) * parseFloat(numero2))
    //    setRespDiv(parseFloat(numero1) / parseFloat(numero2))
    //    }
    // }, [numero1, numero2])

    const handleSoma = () => setRespSoma(parseFloat(numero1) + parseFloat(numero2))
    const handleSub = () => setRespSub(parseFloat(numero1) - parseFloat(numero2))
    const handleMulti = () => setRespMulti(parseFloat(numero1) * parseFloat(numero2))
    const handleDiv = () => setRespDiv(parseFloat(numero1) / parseFloat(numero2))

    const handleAll = (batata, frango) => {
        setRespSoma(parseFloat(batata) + parseFloat(frango))
        setRespSub(parseFloat(batata) - parseFloat(frango))
        setRespMulti(parseFloat(batata) * parseFloat(frango))
        setRespDiv(parseFloat(batata) / parseFloat(frango))
    }

    return(
        <>
            <Menu/>
            <div className={style.wrapCalc}>
                <h1>Calculos</h1>
                <div className={style.wrapInputs}>
                    <label htmlFor="n1"></label>
                    <input 
                    type="number" 
                    placeholder="Insira o primeiro número" 
                    className={style.inputStyle}
                    value={numero1}
                    onChange={(e) => setNumero1(e.target.value)}
                    />
                    <label htmlFor="n2"></label>
                    <input 
                    type="number" 
                    placeholder="Insira o segundo número"
                    className={style.inputStyle}
                    value={numero2}
                    onChange={(e) => setNumero2(e.target.value)}
                    />
                    <button onClick={() => {handleAll(numero1, numero2)}}>Calcular todo</button>
                </div>
                <div className={style.wrapAllInputs}>
                    <div>
                        <h1>Soma</h1>
                        {!isNaN(respSoma) && respSoma}
                        <button onClick={handleSoma}>SOMAR</button>
                    </div>
                    <div>
                        <h1>Sub</h1>
                        {!isNaN(respSub) && respSub}
                        <button onClick={handleSub}>SUB</button>
                    </div>
                    <div>
                        <h1>Multi</h1>
                        {!isNaN(respMulti) && respMulti}
                        <button onClick={handleMulti}>MULTI</button>
                    </div>
                    <div>
                        <h1>Div</h1>
                        {!isNaN(respDiv) && respDiv}
                        <button onClick={handleDiv}>DIV</button>
                    </div>
                </div>
            </div>
        </>
    )
}