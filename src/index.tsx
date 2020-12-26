import React, { createContext } from "react"
import ReactDOM from "react-dom"

import "./index.css"
import App from "./App"

import { Game } from "./store/Game"

export const GameContextStore = createContext<Game>({} as Game)

ReactDOM.render(
  <React.StrictMode>
    <GameContextStore.Provider value={new Game()}>
      <div className="wrapper">
        <App />
      </div>
    </GameContextStore.Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
