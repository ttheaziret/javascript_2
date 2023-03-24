const button = document.querySelector("button")
const wrapper = document.querySelector(".wrapper")

button.addEventListener("click", () => {
    const request = new XMLHttpRequest()
    request.open("GET", "https://pokeapi.co/api/v2/pokemon/")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response)
        // console.log(data.results)
        data.results.map((item) => {
            console.log(item.name)
            const block = document.createElement("div")
            block.style.width = '150px'
            block.style.height = '150px'
            block.style.border = '1px solid'
            block.style.marginBottom = '10px'
            block.innerHTML = item.name
            wrapper.append(block)
        })
    })
})