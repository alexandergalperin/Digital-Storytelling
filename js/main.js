const scrollable = document.querySelector('.scrollable');
const scrollable2 = document.querySelectorAll('.scrollable2');
const removeThis = document.querySelector('.removethis');
const topChose = document.querySelector('.top-chose');
const SportImages = document.querySelector('.sportimgs');
const search = document.querySelector('.search');

const btnChose = document.querySelector('.btnChose');
const backBtnEx = document.querySelector('.backBtnEx');
const backBtnCa = document.querySelector('.backBtnCa');

const closeBtn = document.querySelectorAll('.closeBtn');
const closeBtn2 = document.querySelector('.closeBtn2');

const joinBtn = document.querySelector('.btnJoin');
const msgBtn = document.querySelector('.msgBtn');
const homeBtn = document.querySelector('.homeBtn');

const eventBtn = document.querySelector('.event');

const filterBtn = document.querySelector('.filter');
const filterCon = document.querySelector('.filter-container');

const profImg = document.querySelector('.profImg');
const volleyball = document.querySelector('.clickable');
const date = document.querySelector('.date');
const scrollHeading = document.querySelectorAll('.scrollHeading');
const content = document.querySelectorAll('.contentX');
const narvBar = document.querySelector('.narBar');

const startSlide = document.querySelector('.startSlide');
const slide = document.querySelector('.slide');


const choseContainer = document.querySelector('.choseContainer');
const homeContainer = document.querySelector('.home-container');
const mesContainer = document.querySelector('.messages-container');
const profContainer = document.querySelector('.profile-container');
const expContainer = document.querySelector('.explore-container');
const menuContainer = document.querySelector('.menu-container');

const menu = document.querySelector('.menu');
const menuImgs = menu.querySelectorAll('img');

scrollable.addEventListener("scroll", event => {
    if(scrollable.scrollTop > 60){
        removeThis.style.opacity = '0';
        setTimeout(function() {
            topChose.style.transform = 'translate(0,-50px)';
            SportImages.style.transform = 'translate(0,-50px)';
            search.style.marginBottom = '8px';
          }, 500);
    }
    else if(scrollable.scrollTop < 60){
        removeThis.style.opacity = '1';
        setTimeout(function() {
            topChose.style.transform = 'translate(0,0px)';
            SportImages.style.transform = 'translate(0,0px)';
            search.style.marginBottom = '32px';
          }, 500);
    }
});

btnChose.addEventListener("click", event => {
    choseContainer.style.display = 'none';
    homeContainer.style.display = 'block';
    menuContainer.style.display = 'block';
    x();
});

volleyball.addEventListener("click", event => {
    slide.style.transform = 'translate(0px,0px)';
    startSlide.style.transform = 'translate(-375px,0px)';
});

backBtnEx.addEventListener("click", event => {
    slide.style.transform = 'translate(375px,0px)';
    startSlide.style.transform = 'translate(0px,0px)';
});

backBtnCa.addEventListener("click", event => {
    slide.style.transform = 'translate(0px,0px)';
});

date.addEventListener("click", event => {
    slide.style.transform = 'translate(-375px,0px)';
});

eventBtn.addEventListener("click", event => {
    slide.style.transform = 'translate(-750px,0px)';
    menu.style.bottom = '-200px';
});

filterBtn.addEventListener("click", event => {
    filterCon.style.display = 'block';
    setTimeout(function() {
        filterCon.style.top = '0';
      }, 50);
});

closeBtn[0].addEventListener("click", event => {
    filterCon.style.top = '820px';
    setTimeout(function() {
        filterCon.style.display = 'none';
      }, 500);
});

closeBtn[1].addEventListener("click", event => {
    filterCon.style.top = '820px';
    setTimeout(function() {
        filterCon.style.display = 'none';
      }, 500);
});

closeBtn2.addEventListener("click", event => {
    slide.style.transform = 'translate(-375px,0px)';
    menu.style.bottom = '0px';
});

joinBtn.addEventListener("click", event => {
    slide.style.transform = 'translate(-1125px,0px)';
});

msgBtn.addEventListener("click", event => {
    for(let i = 0; i<menuImgs.length;i++){
        if(i % 2 != 0)
            menuImgs[i].style.display = 'none';
        else{
            menuImgs[i].style.display = 'block';   
        }
    };
    menuImgs[7].style.display = 'block';
    menuImgs[6].style.display = 'none';
    mesContainer.style.display = 'block';
    homeContainer.style.display = 'none';
    profContainer.style.display = 'none';
    slide.style.transform = 'translate(375px,0px)';
    startSlide.style.transform = 'translate(0px,0px)';
    menu.style.bottom = '0px';
});

homeBtn.addEventListener("click", event => {
    for(let i = 0; i<menuImgs.length;i++){
        if(i % 2 != 0)
            menuImgs[i].style.display = 'none';
        else{
            menuImgs[i].style.display = 'block';   
        }
    };
    menuImgs[1].style.display = 'block';
    menuImgs[0].style.display = 'none';
    homeContainer.style.display = 'block';
    mesContainer.style.display = 'none';
    profContainer.style.display = 'none';
    slide.style.transform = 'translate(375px,0px)';
    startSlide.style.transform = 'translate(0px,0px)';
    menu.style.bottom = '0px';
});



menuImgs[0].addEventListener("click", event => {
    for(let i = 0; i<menuImgs.length;i++){
        if(i % 2 != 0)
            menuImgs[i].style.display = 'none';
        else{
            menuImgs[i].style.display = 'block';   
        }
    };
    menuImgs[1].style.display = 'block';
    menuImgs[0].style.display = 'none';
    homeContainer.style.display = 'block';
    mesContainer.style.display = 'none';
    profContainer.style.display = 'none';
});

menuImgs[2].addEventListener("click", event => {
    for(let i = 0; i<menuImgs.length;i++){
        if(i % 2 != 0)
            menuImgs[i].style.display = 'none';
        else{
            menuImgs[i].style.display = 'block';   
        }
    };
    menuImgs[3].style.display = 'block';
    menuImgs[2].style.display = 'none';
    expContainer.style.display = 'block';
    homeContainer.style.display = 'none';
    mesContainer.style.display = 'none';
    profContainer.style.display = 'none';
});

menuImgs[6].addEventListener("click", event => {
    for(let i = 0; i<menuImgs.length;i++){
        if(i % 2 != 0)
            menuImgs[i].style.display = 'none';
        else{
            menuImgs[i].style.display = 'block';   
        }
    };
    menuImgs[7].style.display = 'block';
    menuImgs[6].style.display = 'none';
    mesContainer.style.display = 'block';
    homeContainer.style.display = 'none';
    profContainer.style.display = 'none';
});

menuImgs[8].addEventListener("click", event => {
    for(let i = 0; i<menuImgs.length;i++){
        if(i % 2 != 0)
            menuImgs[i].style.display = 'none';
        else{
            menuImgs[i].style.display = 'block';   
        }
    };
    x();
    menuImgs[9].style.display = 'block';
    menuImgs[8].style.display = 'none';
    homeContainer.style.display = 'none';
    mesContainer.style.display = 'none';
    profContainer.style.display = 'block';
});

function x(){
    for(let i = 0; i < scrollable2.length;i++){
        scrollable2[i].addEventListener("scroll", event => {
            if(scrollable2[0].scrollTop > 60){
                scrollHeading[0].style.transform = 'scale(0.5)';
                scrollHeading[0].style.margin = '48px 0  20px 90px';
                content[0].style.paddingTop = '150px';
            }
            if(scrollable2[2].scrollTop > 60){
                scrollHeading[2].style.transform = 'scale(0.7)';
                scrollHeading[2].style.margin = '0';
                profImg.style.transform = 'scale(0.6)'
                profImg.style.margin = '20px 0 0px 0'
                content[2].style.paddingTop = '200px'; 
            }

            if(scrollable2[3].scrollTop > 60){
                scrollHeading[3].style.transform = 'scale(0.5)';
                scrollHeading[3].style.margin = '45px 130px 10px 130px';
                content[3].style.marginTop = '90px'; 
            }

            else if(scrollable2.scrollTop < 60){
               
            }
        });
    }
};
