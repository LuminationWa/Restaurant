function makeContact() {
    const content = document.getElementById('content');
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    content.append(contentContainer)
    let title = document.createElement('h2');
    title.textContent = 'Filler Contact';
    let text1 = document.createElement('p');
    text1.textContent = 'Double Contact';
    let text2 = document.createElement('p');
    text2.textContent = 'Triple Contact';
    contentContainer.append(title, text1, text2);
}

export default makeContact;