// Membership dialog handlers
const dialog = document.querySelector('#dialogBox');
const npLevelButton = document.querySelector('#np-levelButton');
const bronzeLevelButton = document.querySelector('#bronze-levelButton');
const silverLevelButton = document.querySelector('#silver-levelButton');
const goldLevelButton = document.querySelector('#gold-levelButton');
const closeDialogButton = document.querySelector('#closeDialogButton');

npLevelButton.addEventListener('click', () => {
    dialog.showModal();
});

bronzeLevelButton.addEventListener('click', () => {
    if (!dialog) return;
    if (typeof dialog.showModal === 'function') {
        dialog.showModal();
    } else {
        dialog.setAttribute('open', '');
    }
});

silverLevelButton.addEventListener('click', () => {
    if (!dialog) return;
    if (typeof dialog.showModal === 'function') {
        dialog.showModal();
    } else {
        dialog.setAttribute('open', '');
    }
});

goldLevelButton.addEventListener('click', () => {
    if (!dialog) return;
    if (typeof dialog.showModal === 'function') {
        dialog.showModal();
    } else {
        dialog.setAttribute('open', '');
    }
});

if (closeDialogButton) {
    closeDialogButton.addEventListener('click', () => {
        if (!dialog) return;
        if (typeof dialog.close === 'function') {
            dialog.close();
        } else {
            dialog.removeAttribute('open');
        }
    });
}

