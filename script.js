const sliderBtns = document.querySelectorAll('.btn_container');

const sliders = {
    0: {
        url: "1111",
        alt: ""
    },
    1: {
        url: "2222",
        alt: ""
    },
    2: {
        url: "3333",
        alt: ""
    },
    3: {
        url: "4444",
        alt: ""
    }
}

let prevComtrol = 0;

function handleClickSliderBtn(event) {
    // alert(sliders[event.currentTarget.dataset.number].url);
    event.currentTarget.querySelector("div").classList.toggle("active_btn");
    sliderBtns[prevComtrol].querySelector("div").classList.toggle("active_btn");
    prevComtrol = event.currentTarget.dataset.number;
}

sliderBtns.forEach(btn => btn.addEventListener('click', handleClickSliderBtn))