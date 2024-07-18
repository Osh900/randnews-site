import { urls } from './urls.js';

function openRandomURLInNewTab() {
    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomUrl = urls[randomIndex];
    window.open(randomUrl, '_blank');
}

// Make the function accessible in the global scope
window.openRandomURLInNewTab = openRandomURLInNewTab;
