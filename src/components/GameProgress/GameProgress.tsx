import React, { useContext } from "react"

import { Title } from "./Title/Title"
import { ProgressBtn } from "./ProgressBtn/ProgressBtn"
import "./styles.css"
import { observer } from "mobx-react"

export const GameProgress = observer(() => {
  return (
    <div className="game-progress">
      <Title />
      <ProgressBtn />
    </div>
  )
})
