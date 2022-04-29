import headerLogo from './img/food-turkey.png';
function makeHeader() {
    let header = document.getElementById('header');
    let headerTop = document.createElement('div');
    headerTop.classList.add('headerTop');
    let headerImg = document.createElement('img');
    headerImg.src = headerLogo;
    let headerTitle = document.createElement('h1');
    headerTitle.textContent = "Cookiezi's dinning";
    headerTop.append(headerTitle, headerImg);
    let nav = document.createElement('nav');
    header.append(headerTop, nav);
    let homeBtn = document.createElement('button');
    homeBtn.id = 'homeBtn';
    homeBtn.textContent = 'Home';
    let menuBtn = document.createElement('button');
    menuBtn.id = 'menuBtn';
    menuBtn.textContent = 'Menu';
    let contactBtn = document.createElement('button');
    contactBtn.id = 'contactBtn';
    contactBtn.textContent = 'Contact';
    nav.append(homeBtn, menuBtn, contactBtn);

}

export default makeHeader;