const kgs = document.querySelector("#kgs")
const usd = document.querySelector("#usd")
const rub = document.querySelector("#rub")

const convert = (elem, target, isTrue) => {
    elem.addEventListener("input", ()=>{
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
            if (isTrue) {
                if (target.id === "usd") {
                    target.value = (elem.value * data.usd).toFixed(2)
                } else {
                    target.value = (elem.value * data.rub).toFixed(2)
                }
            } else {
                if (elem.id === "usd") {
                    target.value = (elem.value / data.usd).toFixed(2)
                } else {
                    target.value = (elem.value / data.rub).toFixed(2)
                }
            }
            
            elem.value === "" ? (target.value = "") : null 
        })
    })
}

convert(kgs, usd, true)
convert(kgs, rub, true)
convert(usd, kgs, false)
convert(rub, kgs, false)
