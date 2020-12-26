import React, { useContext } from "react"

import "./styles.css"

import { observer } from "mobx-react"
import { cardInterface } from "../../store/Game"
import { GameContextStore } from "../.."

export const Card = observer(
  ({ id, color, show, open }: cardInterface): React.ReactElement => {
    const store = useContext(GameContextStore)

    const getFlipState = (): string => {
      if (open || show) {
        return "flip"
      }
      return ""
    }

    return (
      <div
        className={`cardWrapper ${getFlipState()}`}
        onClick={() => store.showCard(id)}
      >
        <div className="flipper">
          <div className="card" style={{ backgroundColor: "lime" }}></div>
          <div className="backCard" style={{ backgroundColor: color }}>
            Back
          </div>
        </div>
      </div>
    )
  }
)
