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



// autoslider
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


// arrow slider 
const sliderWrapper = document.querySelector('.offer__slider-wrapper');
const slides = sliderWrapper.querySelectorAll('.offer__slide');
const prevButton = document.querySelector('.offer__slider-prev');
const nextButton = document.querySelector('.offer__slider-next');
const currentSlide = document.getElementById('current');
const totalSlides = document.getElementById('total');

let currentSlideIndex = 0;
const totalSlideCount = slides.length;

const hideSlides = () => {
  slides.forEach((slide) => (slide.style.display = 'none'));
};

const showCurrentSlide = () => {
  hideSlides();
  slides[currentSlideIndex].style.display = 'block';
  currentSlide.textContent = (currentSlideIndex + 1).toString().padStart(2, '0');
};

const goToPrevSlide = () => {
  currentSlideIndex = (currentSlideIndex - 1 + totalSlideCount) % totalSlideCount;
  showCurrentSlide();
};

const goToNextSlide = () => {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlideCount;
  showCurrentSlide();
};

const autoSlideTransition = () => {
  goToNextSlide();
  setTimeout(autoSlideTransition, 5000);
};

hideSlides();
showCurrentSlide();

prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);

setTimeout(autoSlideTransition, 5000);


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