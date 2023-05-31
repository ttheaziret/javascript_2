const button = document.querySelector(".button")
const wrapper = document.querySelector(".wrapper")

// button.addEventListener("click", () => {
//     const req = new XMLHttpRequest()
//     req.open("GET", "wild.json")
//     req.setRequestHeader("Content-type", "application.json")
//     req.send()

//     req.addEventListener("load", () => {
//         const data = JSON.parse(req.response)

//         data.forEach(item => {
//             const card = document.createElement("div")

//             card.innerHTML = 
//             `
//             <div class="card">
//                 <img class="cardImg" src="${item.image}" alt="#">
//                 <span class="name">${item.name}</span>
//                 <span class="description">${item.description}</span>
//                 <span class="price">${item.price}</span>
//             </div>`
//             wrapper.append(card)
//         })
//     })
// })

button.addEventListener("click", () => {
    fetch("wild.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const card = document.createElement("div")

            card.innerHTML = 
            `
            <div class="card">
                <img class="cardImg" src="${item.image}" alt="#">
                <span class="name">${item.name}</span>
                <span class="description">${item.description}</span>
                <span class="price">${item.price}</span>
            </div>`
            wrapper.append(card)
        })
    })
})
