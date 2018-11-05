import Alligator from "./models/Alligator.js"
import Buffalo from "./models/Buffalo.js"
import Cougar from "./models/Cougar.js";
import dinosaur from "./models/dinosaur.js";
import eagle from "./models/eagle.js";
import fish from "./models/fish.js";
import gorilla from "./models/fish.js";
import hyena from "./models/hyena.js";
import iguana from "./models/iguana.js";
import jackrabbit from "./models/iguana.js";
import koala from "./models/iguana.js";
import llama from "./models/llama.js";
import mouse from "./models/mouse.js";
import numbat from "./models/numbat.js";
import Octopus from "./models/Octopus.js";
import panda from "./models/panda.js";
import quail from "./models/quail.js";
import rabbit from "./models/rabbit.js";
import salmon from "./models/salmon.js";
import termite from "./models/termite.js";
import umbrellabird from "./models/umbrellabird.js";
import vulture from "./models/vulture.js";
import walrus from "./models/walrus.js";
import xenon from "./models/xenon.js";
import yak from "./models/yak.js";
import zebra from "./models/zebra.js";


let alligatorPen = [
  new Alligator("Ally", "dangerous", "pizza"),
  new Alligator("Bob", "dangerous", "hamburgers")
]

let BuffaloPen = [
  new Buffalo("George", "dangerous", "birds"),
  new Buffalo("Ben", "dangerous", "hawks")
]

let CougarPen = [
  new Cougar("Sara", "dangerous", "mice"),
  new Cougar("Sme", "dangerous", "mouse")
]
let dinosaurPen = [
  new dinosaur("Jim", "not-dangerous", "fish"),
  new dinosaur("Birch", "not-dangerous", "bear")
]
let eaglePen = [
  new eagle("Beth", "not-dangerous", "air"),
  new eagle("P", "not-dangerous", "spaghetti")
]
let fishPen = [
  new fish("Sam", "not-dangerous", "water"),
  new fish("Burtha", "not-dangerous", "ocean")
]
let gorillaPen = [
  new gorilla("Hunter", "dangerous", "meat"),
  new gorilla("Joe", "dangerous", "steak")
]
let hyenaPen = [
  new hyena("Stan", "dangerous", "burgers"),
  new hyena("Igor", "dangerous", "fries")
]
let iguanaPen = [
  new iguana("Gim", "not-dangerous", "cheese"),
  new iguana("Yetti", "not-dangerous", "umbrellas")
]
let jackrabbitPen = [
  new jackrabbit("Bambi", "not-dangerous", "popsicles"),
  new jackrabbit("Nona", "not-dangerous", "pencils")
]
let koalaPen = [
  new koala("Sweets", "not-dangerous", "sauce"),
  new koala("Mona", "not-dangerous", "kale")
]
let llamaPen = [
  new llama("Pressure", "dangerous", "bread"),
  new llama("Hes", "dangerous", "salad")
]
let mousePen = [
  new mouse("Izzy", "not-dangerous", "oil"),
  new mouse("Cotton", "not-dangerous", "pens")
]
let numbatPen = [
  new numbat("Ruze", "dangerous", "crackers"),
  new numbat("Henry", "dangerous", "carrots")
]
let OctopusPen = [
  new Octopus("bust", "dangerous", "prunes"),
  new Octopus("Joe", "dangerous", "vinegar")
]
let pandaPen = [
  new panda("Frank", "dangerous", "straw"),
  new panda("Igor", "dangerous", "Salt")
]
let quailPen = [
  new quail("lori", "not-dangerous", "grapes"),
  new quail("Papa", "not-dangerous", "Kites")
]
let rabbitPen = [
  new rabbit("yor", "dangerous", "hens"),
  new rabbit("abby", "dangerous", "rubies")
]
let salmonPen = [
  new salmon("don", "not-dangerous", "towels"),
  new salmon("Quinn", "not-dangrous", "oranges")
]
let termitePen = [
  new termite("bee", "not-dangerous", "dirt"),
  new termite("nee", "not-dangerous", "mud")
]
let umbrellabirdPen = [
  new umbrellabird("Ruzy", "dangerous", "newspaper"),
  new umbrellabird("Pop", "dangerous", "Jerkey")
]
let vulturePen = [
  new vulture("Franky", "dangerous", "res"),
  new vulture("Igorz", "dangerous", "bears")
]
let walrusPen = [
  new walrus("Tom", "dangerous", "tomatoes"),
  new walrus("prince", "dangerous", "limes")
]
let xenonPen = [
  new xenon("Fishy", "not-dangerous", "avocado"),
  new xenon("Dingo", "not-dangerous", "crayons")
]
let yakPen = [
  new yak("Tim", "dangerous", "thai"),
  new yak("ben", "dangerous", "crema")
]
let zebraPen = [
  new zebra("Vega", "not-dangerous", "lard"),
  new zebra("Mimi", "not-dangerous", "ravioli")
]

for (let i = 0; i < alligatorPen.length; i++) {
  let alligator = alligatorPen[i];
  alligator.eat("pizza");
}
for (let i = 0; i < BuffaloPen.length; i++) {
  let buffalo = BuffaloPen[i];
  buffalo.eat("birds");
}

for (let i = 0; i < CougarPen.length; i++) {
  let Cougar = CougarPen[i];
  Cougar.eat("mice");
}
for (let i = 0; i < dinosaurPen.length; i++) {
  let dinosaur = dinosaurPen[i];
  dinosaur.eat("bear");
}

for (let i = 0; i < eaglePen.length; i++) {
  let eagle = eaglePen[i];
  eagle.eat("air");
}

for (let i = 0; i < fishPen.length; i++) {
  let fish = fishPen[i];
  fish.eat("water");
}

for (let i = 0; i < gorillaPen.length; i++) {
  let gorilla = gorillaPen[i];
  gorilla.eat("meat");
}

for (let i = 0; i < hyenaPen.length; i++) {
  let hyena = hyenaPen[i];
  hyena.eat("burgers");
}

for (let i = 0; i < iguanaPen.length; i++) {
  let iguana = iguanaPen[i];
  iguana.eat("cheese");
}

for (let i = 0; i < jackrabbitPen.length; i++) {
  let jackrabbit = jackrabbitPen[i];
  jackrabbit.eat("pencils");
}

for (let i = 0; i < koalaPen.length; i++) {
  let koala = koalaPen[i];
  koala.eat("sauce");
}

for (let i = 0; i < llamaPen.length; i++) {
  let llama = llamaPen[i];
  llama.eat("bread");
}

for (let i = 0; i < mousePen.length; i++) {
  let mouse = mousePen[i];
  mouse.eat("oil");
}

for (let i = 0; i < numbatPen.length; i++) {
  let numbat = numbatPen[i];
  numbat.eat("crackers");
}

for (let i = 0; i < OctopusPen.length; i++) {
  let Octopus = OctopusPen[i];
  Octopus.eat("prunes");
}

for (let i = 0; i < pandaPen.length; i++) {
  let panda = pandaPen[i];
  panda.eat("straw");
}

for (let i = 0; i < quailPen.length; i++) {
  let quail = quailPen[i];
  quail.eat("grapes");
}

for (let i = 0; i < rabbitPen.length; i++) {
  let rabbit = rabbitPen[i];
  rabbit.eat("hens");
}

for (let i = 0; i < salmonPen.length; i++) {
  let salmon = salmonPen[i];
  salmon.eat("towels");
}

for (let i = 0; i < termitePen.length; i++) {
  let termite = termitePen[i];
  termite.eat("dirt");
}

for (let i = 0; i < umbrellabirdPen.length; i++) {
  let umbrellabird = umbrellabirdPen[i];
  umbrellabird.eat("newspaper");
}

for (let i = 0; i < vulturePen.length; i++) {
  let vulture = vulturePen[i];
  vulture.eat("res");
}

for (let i = 0; i < walrusPen.length; i++) {
  let walrus = walrusPen[i];
  walrus.eat("pen");
}

for (let i = 0; i < xenonPen.length; i++) {
  let xenon = xenonPen[i];
  xenon.eat("avocado");
}

for (let i = 0; i < yakPen.length; i++) {
  let yak = yakPen[i];
  yak.eat("thai");
}

for (let i = 0; i < zebraPen.length; i++) {
  let zebra = zebraPen[i];
  zebra.eat("ravioli");
}