// checking for localStorage colors
if(localStorage.getItem("color") ){
    // Set the color on the root
    document.documentElement.style.setProperty("--main--color",localStorage.getItem("color"));
    //remove then add active className
    document.querySelectorAll(".setting-box .color-options ul li").forEach((element)=>{
        element.classList.remove("active-color");
    });
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active-color");
    changeLogo(window.localStorage.getItem("color"));
}
// checking for localStorage colors

//search 
let iconBtn = document.querySelector(".search ion-icon");
let search = document.querySelector(".search");
let del = document.querySelector(".search .del");

del.onclick = function(){
    document.querySelector(".search .input input").value="";
}
//getting the style width element to compare it in small screen size
var element = document.querySelector(".landing-page header .logo img"),
style = window.getComputedStyle(element),
width = style.getPropertyValue('width');


iconBtn.onclick= function(){
    search.classList.toggle("active");
    iconBtn.classList.toggle("activeIcon");
    if(iconBtn.classList.contains("activeIcon")){
        document.querySelector(".landing-page header .logo img").style.width ="0";
    }
    else{
        document.querySelector(".landing-page header .logo img").style.width ="199px";
    }
}
//search 

//menu indicator
let lists = document.querySelectorAll(".navigation-phone ul li");
function activeLink(){
    lists.forEach((li)=>{
        li.classList.remove("active-indicator");
        this.classList.add("active-indicator");
    })
}

lists.forEach((li)=>{
    li.addEventListener("click",activeLink);
})

//menu indicator

//checking for localStorage images
if(localStorage.getItem("img")){
    document.querySelector(".landing-page").style.backgroundImage=`url(../Image/ourSociety/${window.localStorage.getItem("img")})`;
    document.querySelectorAll(".setting-box .background-options img").forEach(element=>{
        element.classList.remove("active-background");
    })
    document.querySelector(`[data-img="${window.localStorage.getItem("img")}"]`).classList.add("active-background");
}

// start setting-box
let settingBtn = document.querySelector(".setting-box i");
let settingBox = document.querySelector(".setting-box");
settingBtn.onclick = function(){
    settingBtn.classList.toggle("fa-spin");
    settingBox.classList.toggle("open");
}
// start setting-box

// bullets option
let bulletsOption = document.querySelectorAll(".nav-bullets span");

bulletsOption.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        bulletsOption.forEach((element)=>{
            element.classList.remove("active-bullet-option");
        })
        e.target.classList.add("active-bullet-option");
        if(e.target.dataset.op=="yes"){
            document.querySelector(".navigation ul").classList.add("off-bullets");
        }
        else{
            document.querySelector(".navigation ul").classList.remove("off-bullets");
        }
    })
})
// bullets option

// color options
let colorsOption = document.querySelectorAll(".setting-box ul li");

colorsOption.forEach(element => {
    element.addEventListener("click",function(e){
        let color = e.target.dataset.color;
        localStorage.setItem("color",color);
        document.documentElement.style.setProperty("--main--color",color);
        colorsOption.forEach(li =>{
            li.classList.remove("active-color")
        })
        e.target.classList.add("active-color");
        changeLogo(color);
    })
});

function changeLogo(color){
    document.querySelector(".landing-page .logo").innerHTML=`<img src="image/LeaderPosLogo${color.substring(1)}.png" alt="">`;
}
// color options

//background options
let imgOptions = document.querySelectorAll(".setting-box .background-options img");

imgOptions.forEach(img =>{
    img.addEventListener("click",function(e){
        window.localStorage.setItem("img",e.target.dataset.img);
        document.querySelector(".landing-page").style.backgroundImage=`url(../Image/ourSociety/${e.target.dataset.img})`;
        imgOptions.forEach(img =>{
            img.classList.remove("active-background");
        })
        e.target.classList.add("active-background");
    })
})
//background options
// phone toggle
let toggler = document.querySelector(".toggle");

toggler.onclick = function () {
    document.querySelector(".setting-box").classList.toggle("open");
    this.classList.toggle("active-close")
}
// phone toggle
// translate feature options
let fisrtL = document.querySelector(".features-section .left .first");
let secondL = document.querySelector(".features-section .left .second");
let thirdL = document.querySelector(".features-section .left .third");
let fisrtR = document.querySelector(".features-section .right .first");
let secondR = document.querySelector(".features-section .right .second");
let thirdR = document.querySelector(".features-section .right .third");
let fisrtC = document.querySelector(".features-section .center .first");
let secondC = document.querySelector(".features-section .center .second");
let thirdC = document.querySelector(".features-section .center .third");
let featureSection = document.querySelector(".features-section");
let test = true;

window.onscroll = function(){
    if(window.scrollY+200 >= featureSection.offsetTop){
        fisrtL.classList.add("active-translate");
        secondL.classList.add("active-translate");
        thirdL.classList.add("active-translate");
        fisrtR.classList.add("active-translate");
        secondR.classList.add("active-translate");
        thirdR.classList.add("active-translate");
        fisrtC.classList.add("active-center");
        secondC.classList.add("active-center");
        thirdC.classList.add("active-center");
    }
    else{
        fisrtL.classList.remove("active-translate");
        secondL.classList.remove("active-translate");
        thirdL.classList.remove("active-translate");
        fisrtR.classList.remove("active-translate");
        secondR.classList.remove("active-translate");
        thirdR.classList.remove("active-translate");
        fisrtC.classList.remove("active-center");
        secondC.classList.remove("active-center");
        thirdC.classList.remove("active-center");
    }
    if(window.scrollY +400>= counterSection.offsetTop){
        if(test){
            counters.forEach((span)=>{
                startCounter(span);
            })
            test = false;
        }
        transition.classList.add("active-translateCounter");
    }
}

// translate feature options

// sing-in\sing up
let signInBtn = document.querySelector(".change-box .create");
let logInBtn = document.querySelector(".change-box .log");
let image = document.querySelector(".sign-up__log-in img");
let logIn = document.querySelector(".sign-up__log-in .log-in");
let signIn = document.querySelector(".sign-up__log-in .sign-up");

logInBtn.onclick = function(){
    signIn.classList.add("off-sign-up");
    logIn.classList.add("active-log-in");
    // signIn.style.transition="0s !important";
}
signInBtn.onclick = function(){
    logIn.classList.remove("active-log-in");
    signIn.classList.remove("off-sign-up");
}
// sing-in\sing up

// counter section
let counterSection = document.querySelector(".counters");
let counters = document.querySelectorAll(".counter-container .numbers-box span");
let transition = document.querySelector(".counter-container")

function startCounter(span){
    let goal = span.dataset.goal;
    let stopCount = setInterval(()=>{
        span.textContent++;
        if(span.textContent == goal){
            clearInterval(stopCount);
        }
    },3000/goal)
}



// counter section