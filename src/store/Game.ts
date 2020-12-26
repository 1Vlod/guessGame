import {
  action,
  autorun,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx"
import { createCard, getRandomArrayNumber, shuffleArray } from "../gameLogic"

export interface cardInterface {
  id: number
  color: string
  open: boolean
  show: boolean
}

export type card = cardInterface
export type gameStatusType = "started" | "finished" | "never"

export class Game {
  cards: card[] = []
  gameStatus: gameStatusType = "never"
  clickAvailable: boolean = true

  constructor() {
    makeObservable(this, {
      cards: observable,
      gameStatus: observable,
      clickAvailable: observable,
      showCard: action,
      changeStatus: action,
      createRandomCards: action,
      changeSize: action,
      cardsArraySize: computed,
      numberOpenElements: computed,
      numberRemainingElements: computed,
    })
    autorun(() => console.log(this.gameStatus))
  }

  showCard(id: number) {
    if (this.gameStatus !== "started") {
      return
    }

    const showedCard = this.cards.find((card) => card.show === true)
    const card = this.cards.find((card) => card.id === id)

    const isClickPrevented = () => {
      return card?.show || card?.open || !this.clickAvailable
    }

    if (isClickPrevented()) {
      return
    }

    if (card) {
      card.show = true
      if (!showedCard) {
        return
      }

      if (card.color === showedCard.color) {
        this.cards.filter((item) => item.show).map((item) => (item.open = true))
      }

      this.clickAvailable = false
      setTimeout(() => {
        runInAction(() => {
          this.cards
            .filter((item) => item.show)
            .map((item) => (item.show = false))
          this.clickAvailable = true
        })
      }, 1000)
    }
  }

  changeStatus(status: gameStatusType) {
    if (status === "never") {
      this.createRandomCards(2)
    }
    this.gameStatus = status
  }

  createRandomCards(size: number) {
    const arr = getRandomArrayNumber(size)
    const shuffledArray = shuffleArray([...arr, ...arr])
    this.cards = shuffledArray.map(createCard)
  }

  changeSize(type: "more" | "less") {
    if (type === "more") {
      this.createRandomCards(this.cardsArraySize / 2 + 2)
      return
    }

    if (this.cardsArraySize > 4) {
      this.createRandomCards(this.cardsArraySize / 2 - 2)
    }
  }

  get cardsArraySize() {
    return this.cards.length
  }

  get numberOpenElements() {
    return this.cards.filter((item) => item.open).length
  }

  get numberRemainingElements() {
    const number: number = this.cardsArraySize - this.numberOpenElements

    if (number === 0) {
      this.changeStatus("finished")
    }

    return number
  }
}
