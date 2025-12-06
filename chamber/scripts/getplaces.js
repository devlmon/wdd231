const cards = document.querySelector('#cards');

async function getPlacesData() {
    const response = await fetch("data/places.msj");
    const data = await response.json();
    displayPlaces(data.places);
}

const displayPlaces = (places) => {
    places.forEach((place) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let button = document.createElement('button');

        // Build the image by setting all the relevant attributes
        img.setAttribute('src', place.photoSource);
        img.setAttribute('alt', place.title);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '220');
        img.setAttribute('height', '220');
        // Build the h2 content out to show the place's title
        title.textContent = place.title;
        // Build the address content
        address.textContent = place.photoSourceAddress;
        // Build the description content
        description.textContent = place.description;
        // Build the button content
        button.textContent = 'Learn More';
        // Append the figure with the image
        figure.appendChild(img);

        // Append the card with the created elements
        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

getPlacesData();
