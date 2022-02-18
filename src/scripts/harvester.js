export const harvestPlants = (plantArray) => {
    const plantOutput = []
    for (const plant of plantArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < (plant.output / 2); i++) {
                plantOutput.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                plantOutput.push(plant)
            }
        }
    }
    return plantOutput
}