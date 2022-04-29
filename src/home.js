import mainImg from './img/pexels-photo-8177410.jpeg'

function makeHome() {
    const content = document.getElementById('content');
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    content.append(contentContainer);
    let smallerContentContainer = document.createElement('div');
    smallerContentContainer.classList.add('smallerContentContainer');
    contentContainer.append(smallerContentContainer);
    let title = document.createElement('h2');
    title.textContent = 'We vegan';
    let veganImg = document.createElement('img');
    veganImg.src = mainImg;
    let text2 = document.createElement('p');
    text2.textContent = 'Bruv Filler Filler FillerFiller Filler FillerFiller Filler FillerFiller Filler FillerFiller Filler FillerFiller Filler Filler Filler Filler FillerFiller Filler FillerFiller Filler FillerFiller Filler FillerFiller Filler Filler Filler Filler FillerFiller Filler FillerFiller Filler FillerFiller Filler FillerFiller Filler FillerFiller Filler Filler';
    smallerContentContainer.append(title, veganImg, text2);
}

export default makeHome;