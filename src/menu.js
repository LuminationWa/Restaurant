function makeMenu() {
    const content = document.getElementById('content');
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    content.append(contentContainer)
    let title = document.createElement('h2');
    title.textContent = 'Filler menu';
    let text1 = document.createElement('p');
    text1.textContent = 'Double menu';
    let text2 = document.createElement('p');
    text2.textContent = 'Triple menu';
    contentContainer.append(title, text1, text2);
}

export default makeMenu;