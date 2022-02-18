const container = document.getElementsByClassName("container")
export const catalog = (harvestedFoodArray) => {
    for (const food of harvestedFoodArray) {
        console.log(food.type)
        container.innerHTML += `<section class="plant">${food.type}</section>`
    }
    console.log(container)
}
