console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"



const yearlyPlan = createPlan()
const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheetSeed = createWheat()

plantSeeds(yearlyPlan)
const harvestedSeeds = harvestPlants(usePlants())

const containermain = document.getElementsByClassName("container")
console.log(containermain.innerHTML)

catalog(harvestedSeeds)