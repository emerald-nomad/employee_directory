let open = key => {
    document.getElementById('modal').style.display = "flex";
    let slide = document.querySelectorAll('.modal__slide')[key];
    slide.style.display = "block";
    slide.classList.add('active');
}

let close = () => {
    document.querySelectorAll('.modal__slide').forEach(slide => {
        slide.style.display = "none";
        slide.classList.remove('active');
    });
    document.getElementById('modal').style.display = "none";

}

let prev = () => {
    let slides = document.querySelectorAll('.modal__slide');
    let active = document.querySelector('.active');
    let key = parseInt(active.getAttribute('key'));

    if (key > 0) {
        active.style.display = 'none';
        active.classList.remove('active');
        slides[key - 1].style.display = 'block';
        slides[key - 1].classList.add('active');
    }
}

let next = () => {
    let slides = document.querySelectorAll('.modal__slide');
    let active = document.querySelector('.active');
    let key = parseInt(active.getAttribute('key'));
    
    if (key < 11) {
        active.style.display = 'none';
        active.classList.remove('active');
        slides[key + 1].style.display = 'block';
        slides[key + 1].classList.add('active');
    }
}

let stopPropagation = event => event.stopPropagation();

const Modal = {
    open: open,
    close: close,
    prev: prev,
    next: next,
    stopPropagation: stopPropagation,
};