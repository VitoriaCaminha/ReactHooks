import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState } from "../../store/index"
import { numberAdd2, login } from '../../store/actions'
import allReducers from '../../store/reducers'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(allReducers, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className='text'>{state.user.name}</span>
                    : <span className='text'>Usuário não logado</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, "Vitoria")}>login</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberAddN", payload: +5 })}>Adicionar 5</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberAddN", payload: -3 })}>Subtrair 3</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberMulti7" })}>x7</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberDiv25" })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberInt" })}>Tornar em inteiro</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
