import { observer } from "mobx-react"
import React, { useContext } from "react"
import { GameContextStore } from "../../.."

export const ProgressBtn = observer(() => {
  const context = useContext(GameContextStore)

  if (context.gameStatus === "never") {
    return (
      <button
        className="btn-start"
        onClick={() => context.changeStatus("started")}
      >
        Начать
      </button>
    )
  }

  return (
    <button
      className="btn-start"
      onClick={() => context.changeStatus("never")}
    >
      Заново
    </button>
  )
})
