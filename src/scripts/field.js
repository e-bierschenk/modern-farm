const plants = []

export const addPlant = (seed) => {
    if(Array.isArray(seed)){
        for (const corn of seed){
            plants.push(corn)
        }
    } else {
        plants.push(seed)
    }
}

export const usePlants = () => {
    return plants
}