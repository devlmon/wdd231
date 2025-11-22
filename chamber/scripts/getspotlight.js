const spotlight = document.querySelector('.spotlight');

async function getMembersData() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const topMembers = data.members.filter(m => m.membershipLevel === 3 || m.membershipLevel === 2);
    const randomTopMembers = topMembers.sort(() => Math.random() - 0.5);
    const selectedTopMembers = randomTopMembers.slice(0, 3);
    displayMembers(selectedTopMembers);
}

function displayMembers(members) {
    spotlight.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('section');
        card.className = 'spotlight-card';

        const logo = document.createElement('img');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '200');

        const name = document.createElement('h2');
        name.textContent = member.name;

        const level = document.createElement('p');
        const levelText = member.membershipLevel === 3 ? 'Gold Member' : 'Silver Member';
        level.textContent = levelText;

        const address = document.createElement('p');
        address.innerHTML = `<strong>ADDRESS:</strong> ${member.address}`;

        const phone = document.createElement('p');
        phone.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;

        const website = document.createElement('p');
        website.innerHTML = `<strong>URL:</strong> ${member.website.split("//")[1]}`;

        const dataDiv = document.createElement('div');
        dataDiv.className = 'spotlight-card-data';

        const pDiv = document.createElement('div');

        pDiv.appendChild(level);
        pDiv.appendChild(address);
        pDiv.appendChild(phone);
        pDiv.appendChild(website);

        dataDiv.appendChild(logo);
        dataDiv.appendChild(pDiv);

        card.appendChild(name);
        card.appendChild(dataDiv);

        spotlight.appendChild(card);
    });
}

getMembersData();

