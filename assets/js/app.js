var cl = console.log;

// event >> whenever user interact with web-aplication event occurs

const hideBtn = document.getElementById("hideBtn");
const showBtn = document.getElementById("showBtn");
const box1 = document.getElementById("box1");
const customToggle = document.getElementById("customToggle");
const box2 = document.getElementById("box2");



function onHideClick(){
    //box1.style.display ='none';
    box1.classList.add('d-none');

}

function onShowHandler() {
    box1.classList.remove('d-none')
}
function onToggleHandler() {
    box1.classList.remove('d-none')
}

let flag = true;
// function onCustomHandler(){
//     cl(this)
//     if(flag === true){
//         box2.classList.add('d-none');
//         flag = false;
//         this.innerHTMl = "show"
//     }else{
//         box2.classList.remove('d-none');
//         flag == true;
//         this.innerHTML = "Hide"
//     }
//     }


const onCustomHandler = (e) => {
    cl(e)
    cl(e.target)
    if(flag == true) {
        box2.classList.add('d-none');
        flag == fals3e;
        e.target.innerHTML = "Show"
    }else {
        box2.classList.remove('d-none');
        flag = true;
        e.target.innerHTML = 'hide'
    }
    }
customToggle.addEventListener('click',onCustomHandler);

hideBtn.addEventListener("click", onHideClick);
showBtn.addEventListener("click",onShowHandler);

toggleBtn.addEventListener('click',onCustomHandler);
