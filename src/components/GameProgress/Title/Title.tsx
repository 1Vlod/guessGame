import React, { useContext } from "react"

import { observer } from "mobx-react"
import { GameContextStore } from "../../.."

export const Title = observer(() => {
  const context = useContext(GameContextStore)

  if (context.gameStatus === "started") {
    return (
      <h2 className="title">
        Осталось: {(context.numberRemainingElements) / 2}
      </h2>
    )
  }

  if (context.gameStatus === "finished") {
    return <h2 className="title">Поздравляю с победой!</h2>
  }

  return <h2 className="title">{"Нажмите, чтобы начать игру =>"}</h2>
})
