import React, { useEffect, useContext } from "react"
import { observer } from "mobx-react"
import "./App.css"

import { Card } from "./components/Card/Card"
import { GameOptions } from "./components/GameOptions/GameOptions"
import { GameProgress } from "./components/GameProgress/GameProgress"

import { GameContextStore } from "./index"

const App: React.FC = observer(
  (): React.ReactElement => {
    const store = useContext(GameContextStore)

    useEffect(() => {
      store.createRandomCards(2)
    }, [])

    return (
      <div className="app">
        <GameOptions />
        <GameProgress />
        <div className="game">
          {store.cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    )
  }
)

export default App
