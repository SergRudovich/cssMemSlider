const sliderBtns = document.querySelectorAll('.btn__container');
const sliderImg = document.querySelector('.slider__img');
const imgTxt = document.querySelector('.img__txt');

const sliders = {
    0: {
        url: "assets/0.jpg",
        alt: "Постоянный недосып уже давно должен был сделать из меня полубога"
    },
    1: {
        url: "assets/1.jpg",
        alt: "Тебе не прийдется закрываться, если ты не будеш открываться"
    },
    2: {
        url: "assets/2.jpeg",
        alt: "Потому что я выбираю карьеру"
    },
    3: {
        url: "assets/3.jpg",
        alt: "Сегодня у нас все еще всерьез, детка"
    }
}

let prevComtrol = 0;
let fontSize = imgTxt.style.fontSize;

imgTxt.innerHTML = sliders[prevComtrol].alt;
sliderImg.src = sliders[prevComtrol].url;

function handleClickSliderBtn(event) {
    sliderImg.style.opacity = "0";
    fontSize = imgTxt.style.fontSize
    imgTxt.style.fontSize = "0";
    event.currentTarget.querySelector("div").classList.toggle("active__btn");
    sliderBtns[prevComtrol].querySelector("div").classList.toggle("active__btn");
    prevComtrol = event.currentTarget.dataset.number;
    setTimeout(() => {
        sliderImg.style.opacity = "1";
        sliderImg.src = sliders[prevComtrol].url;
        imgTxt.style.fontSize = fontSize;
        imgTxt.innerHTML = sliders[prevComtrol].alt;
    }, 400);
}

sliderBtns.forEach(btn => btn.addEventListener('click', handleClickSliderBtn))