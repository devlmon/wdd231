// Membership dialog handlers
const dialog = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox div');
const npLevelButton = document.querySelector('#np-levelButton');
const bronzeLevelButton = document.querySelector('#bronze-levelButton');
const silverLevelButton = document.querySelector('#silver-levelButton');
const goldLevelButton = document.querySelector('#gold-levelButton');
const closeDialogButton = document.querySelector('#closeDialogButton');
const joinForm = document.querySelector('.join-us-form');

npLevelButton.addEventListener('click', () => {
    dialog.showModal();
    dialog.setAttribute('class', 'np-level');
    dialogBoxText.innerHTML = `<ul><li>Cost: Free</li><li>Benefits:</li><ul><li>Access to chamber networking events</li><li>Basic training workshops for staff and volunteers</li><li>Inclusion in chamber directory listing</li><li>Eligibility for community service recognition programs</li></ul></ul>`;
});

bronzeLevelButton.addEventListener('click', () => {
    dialog.showModal();
    dialog.setAttribute('class', 'bronze-level');
    dialogBoxText.innerHTML = `<ul><li>Cost: Low annual fee</li><li>Benefits:</li><ul><li>All NP benefits</li><li>Invitations to special chamber events</li><li>Discounts on selected training sessions</li><li>Business name spotlighted once per year on homepage</li><li>Access to member-only resources and newsletters</li></ul></ul>`;
});

silverLevelButton.addEventListener('click', () => {
    dialog.showModal();
    dialog.setAttribute('class', 'silver-level');
    dialogBoxText.innerHTML = `<ul><li>Cost: Moderate annual fee</li><li>Benefits:</li><ul><li>All Bronze benefits</li><li>Priority advertising opportunities (homepage spotlight twice per year)</li><li>Greater discounts on chamber event tickets</li><li>Access to advanced training and professional development programs</li><li>Eligibility for small business awards and recognition</li></ul></ul>`;
});

goldLevelButton.addEventListener('click', () => {
    dialog.showModal();
    dialog.setAttribute('class', 'gold-level');
    dialogBoxText.innerHTML = `<ul><li>Cost: Premium annual fee</li><li>Benefits:</li><ul><li>All Silver benefits</li><li>Unlimited advertising opportunities (homepage spotlight, featured articles, social media promotion)</li><li>Maximum discounts on all chamber events and training</li><li>Exclusive invitations to leadership roundtables and networking dinners</li><li>Priority placement in chamber directory and promotional materials</li><li>Recognition as a top-tier supporter of the chamber</li></ul></ul>`;
});

closeDialogButton.addEventListener('click', () => {
    dialog.close();
});

const timestampInput = document.getElementById('timestamp');
joinForm.addEventListener('submit', () => {
    timestampInput.value = Date.now();
});


