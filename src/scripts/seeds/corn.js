export const createCorn = () => {
    const cornArray = []
    const cornObj = {
        type: "Corn",
        height: 180,
        output: 6
    }
    for (let i = 0; i < 2; i++){
        cornArray.push(cornObj)
    }
    return cornArray
}