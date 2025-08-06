function toggleText() {
    let btn = document.querySelector('.toggle-text-button');
    let text = document.querySelector('#text');
    btn.addEventListener('click', (e) => {
        if (text.hidden === false) {
            text.hidden = true;
        } else {
            text.hidden = false;
        }
    })
}

toggleText();
