const cards = document.querySelector('#cards');
const tableButton = document.querySelector('#view-selector-table');
const gridButton = document.querySelector('#view-selector-grid');

async function getMembersData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        // Build the image by setting all the relevant attributes
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '220');
        image.setAttribute('height', '220');
        // Build the h2 content out to show the member's name
        name.textContent = member.name;
        // Build the address content
        address.textContent = member.address;
        // Build the phone content
        phone.textContent = member.phone
        // Build the website content
        website.textContent = member.website;
        website.setAttribute('href', "#");
        website.setAttribute('target', '_blank');


        // Append the section(card) with the created elements
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

tableButton.addEventListener('click', () => {
    cards.classList.add('show-table');
    cards.classList.remove('show-grid');
});

gridButton.addEventListener('click', () => {
    cards.classList.add('show-grid');
    cards.classList.remove('show-table');
});

getMembersData();