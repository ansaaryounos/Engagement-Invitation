const flowers = document.getElementsByClassName("f");
const heart = document.getElementsByClassName("heart");
const bis = document.getElementById("bismillah");

let i = 0;

Bloom();


function Bloom() {
    
    bis.style.opacity = 1;
    bis.style.filter = 'blur(0px)';

    let i = 0;

    for (i; i < flowers.length; i++) {

        if (flowers[i].getBoundingClientRect().top < 600) {
            flowers[i].classList.add("f"+i.toString());
        }
    }

    if (heart[0].getBoundingClientRect().top < 600) {
        heart[0].classList.add("heart-full");

        let object = document.getElementsByClassName("fn");
        for (let j = 0; j < object.length; j++) {
            setTimeout(function(){
                object[j].style.opacity = 1;
            },1000)
        }
    }
}