let overlay = document.querySelector('.overlay');


let modal1 = document.querySelector('.modal1');
let btn1 = document.querySelector('.info_link').addEventListener('click', function (ev) {
    ev.preventDefault();

    modal1.classList.add('modal1_open');
    overlay.classList.add('overlay_active');
});

let modal2 = document.querySelector('.box_subscribe_mob');
let btnSubscribe = document.querySelector('.btn_subscribe_mob')

btnSubscribe.addEventListener('click', function (d) {
    d.preventDefault()
    overlay.classList.add('overlay_active');
    modal2.classList.add('box_subscribe_mob_active')
    console.log('yes')
});

let close = document.querySelectorAll('.close');
close.forEach(function (elem) {
    elem.addEventListener('click', function () {
        modal2.classList.remove('box_subscribe_mob_active');
        modal1.classList.remove('modal1_open');
        overlay.classList.remove('overlay_active');
        console.log('yes')
    })
});