const button = document.querySelector(".button")
const wrapper = document.querySelector(".wrapper")

button.addEventListener("click", () => {
    const reg = new XMLHttpRequest()
    reg.open("GET", "wild.json")
    reg.setRequestHeader("Content-type", "application.json")    
    reg.send()

    reg.addEventListener("load", () => {
        const data = JSON.parse(reg.response)

        data.forEach(item => {
            const card = document.createElement("div")

            card.innerHTML = `
            <div class="card">
                <img class="cardImg" src="${item.image}" alt="#">
                <span class="name">${item.name}</span>
                <span class="description">${item.description}</span>
                <span class="price">${item.price}</span>
            </div> `
            wrapper.append(card)
        })

    })


})