// Read form data from the URL query string and populate the thankyou page
const params = new URLSearchParams(window.location.search);

const first = params.get('first-name');
const last = params.get('last-name');
const email = params.get('email');
const phone = params.get('phone');
const organization = params.get('organization');
const timestamp = params.get('timestamp');

const fullName = `${first} ${last}`.trim();

const fullNameTag = document.getElementById('full-name');
const emailTag = document.getElementById('email');
const phoneTag = document.getElementById('phone');
const organizationTag = document.getElementById('organization');
const timestampTag = document.getElementById('timestamp');

fullNameTag.textContent = fullName;
emailTag.innerHTML = `<strong>Email:</strong> ${email}`;
phoneTag.innerHTML = `<strong>Phone:</strong> ${phone}`;
organizationTag.innerHTML = `<strong>Organization:</strong> ${organization}`;

const dateFormat = new Date(Number(timestamp));
timestampTag.innerHTML = `<strong>Submitted:</strong> ${dateFormat.toLocaleString()}`;

