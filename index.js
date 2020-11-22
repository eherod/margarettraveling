
const header = document.querySelector('.nav-container');



window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);

    

    if(top >= 100){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
};

const parallax = document.getElementById('parallax');


window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .7 + "px";
    

});


