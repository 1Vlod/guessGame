import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { GameContextStore } from '../..'
import "./styles.css"



export const GameOptions = observer(() => {
  const context = useContext(GameContextStore)
  const btnsDisabled = context.gameStatus !== "never"

  return (
    <div className="GameOptions">
      <button className="btn btn_minus" onClick={() => context.changeSize("less")} disabled={btnsDisabled}>-</button>
      <div className="field-size">{context.cardsArraySize / 2}</div>
      <button className="btn btn_plus" onClick={() => context.changeSize("more")} disabled={btnsDisabled}>+</button>
    </div>
  )
})

