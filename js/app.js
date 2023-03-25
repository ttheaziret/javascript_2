const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () =>
{
    tabContent.forEach((item) => {
        item.style.display = 'none';
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    })
}
hideTabContent()
const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
showTabContent()


//dz autoslider
let tabCounter = 0;
const autoFunctionSlider = () =>
{
    if (tabCounter === 4) tabCounter = 0;
    hideTabContent()
    showTabContent(tabCounter);
    tabCounter++;
}
let autoSlider = setInterval( autoFunctionSlider, 1000);

tabsParent.addEventListener('click', (e) =>
{
    clearInterval(autoSlider)
    setTimeout(() => {
        autoSlider = setInterval( autoFunctionSlider, 1000);
    }, 5000);
    if (e.target.classList.contains('tabheader__item')) {
        const target = e.target
        tabs.forEach((item, i) =>
        {
            if (target === item) {
                hideTabContent()
                showTabContent(i)
                tabCounter = i;
            }
        })
    }
})
//modal 
const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector(".btn_white")
const openModalDark = document.querySelector(".btn_dark")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}
openModalBtn.addEventListener("click", openModal)
openModalDark.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
closeModalBtn.addEventListener("click", closeModal)


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const scrollHeight = document.body.scrollHeight
    if (scrollPosition >= scrollHeight) {
        openModal()
    }
})

closeModalBtn.onclick = () => closeModal()

modal.onclick = (event) => (event.target === modal ? closeModal() : false)


//lesson 5

// const forms = document.querySelectorAll("form")

// const postData = (form) => {
//     form.addEventListener("click", (e) => {
//         e.preventDefault()
//         const formData = new FormData(form)
//         const obj = {}
//         formData.forEach((item, name) => {
//             obj[name] = item
//         })
//         const json = JSON.stringify(obj)
//         const request = new XMLHttpRequest()
//         request.open("POST", "server.php")
//         request.setRequestHeader("Content-type", "application/json")
//         request.send(json)
//     })
// }

// forms.forEach((item) => {
//     postData(item)
// })

const forms = document.querySelectorAll("form")

const postData = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(form)
        console.log(formData)
    })
}

forms.forEach((item) => {
    postData(item)
})
