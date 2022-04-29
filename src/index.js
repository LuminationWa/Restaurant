import makeHeader from './header';
import makeHome from './home';
import makeMenu from './menu';
import makeContact from './contact';
import "./style.css"
makeHeader();
makeHome();

function resetContent() {
    content.textContent = '';
}

function setColor1(element) {
    element.style.color = '#a78bfa';
    element.style.borderColor = '#a78bfa';
}

function setColor2(element) {
    element.style.color = '#bae6fd';
    element.style.borderColor = '#bae6fd';
}

let homeBtn = document.getElementById('homeBtn');
let menuBtn = document.getElementById('menuBtn');
let contactBtn = document.getElementById('contactBtn');
let content = document.getElementById('content');

homeBtn.addEventListener('click', function() {
    resetContent();
    makeHome();
    setColor1(homeBtn);
    setTimeout(() => {setColor2(homeBtn)}, 200)
});

menuBtn.addEventListener('click', function() {
    resetContent();
    makeMenu();
    setColor1(menuBtn);
    setTimeout(() => {setColor2(menuBtn)}, 200)
});

contactBtn.addEventListener('click', function() {
    resetContent();
    makeContact();
    setColor1(contactBtn);
    setTimeout(() => {setColor2(contactBtn)}, 200)
});

console.log('aliens');