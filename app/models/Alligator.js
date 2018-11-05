class Alligator {
  constructor(name, color, favFood) {

    this.name = name
    this.color = color
    this.favFood = favFood
  }
  eat(food) {
    if (food == this.favFood) {
      console.log("Yummy")
    }
    console.log(`${this.name} is eating ${food}`)
  }
}
