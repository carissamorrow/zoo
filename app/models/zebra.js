export default class zebra {
  constructor(name, danger, favFood) {

    this.name = name
    this.danger = danger
    this.favFood = favFood
  }

  eat(food) {
    if (food == this.favFood) {
      console.log(`munch! ${this.name} is happily eating ${food}`)
    }
    else {
      console.log(`munch! ${this.name} is unhappily eating ${food}`)
    }
  }
}