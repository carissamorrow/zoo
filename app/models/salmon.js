export default class salmon {
  constructor(name, danger, favFood) {

    this.name = name
    this.danger = danger
    this.favFood = favFood
  }
  eat(food) {
    if (food == this.favFood) {
      console.log(`${this.name} is eating ${food}`);
    }
    else {
      console.log(`${this.name} is unhappily eating ${food}`);
    }
  }
}