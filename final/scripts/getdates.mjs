const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;

lastModified.innerHTML = `Last modification: ${document.lastModified}`;

export { today };