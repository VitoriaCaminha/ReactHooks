import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFactorial(n - 1) * n
}

function calcParImpar(num) {
    const n = parseInt(num)
    if (n % 2 === 1) return "impar"
    if (n % 2 === 0) return "par"
    return calcParImpar()
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [parImpar, setParImpar] = useState(0)


    useEffect(function () {
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(function () {
        if (factorial > 1000000) {
            document.title = "um milhão"
        }
    }, [factorial])

    useEffect(function () {
        setParImpar(calcParImpar(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />

            <div className='center'>
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial === - 1 ? "não existe" : factorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}></input>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className='center'>
                <div>
                    <span className="text">Par ou impar: </span>
                    <span className="text red">{parImpar}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
