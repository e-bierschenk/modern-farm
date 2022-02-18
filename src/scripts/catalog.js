const container = document.getElementsByClassName("container")

export const catalog = (harvestedFoodArray) => {
    for (const food of harvestedFoodArray) {
        container[0].innerHTML += `<section class="plant">${food.type}</section>`
    }
}
