import { urls1 } from './urls1.js';

function openRandomURLInNewTab() {
    const randomIndex = Math.floor(Math.random() * urls1.length);
    const randomUrl = urls1[randomIndex];
    window.open(randomUrl, '_blank');
}

// Make the function accessible in the global scope
window.openRandomURLInNewTab = openRandomURLInNewTab;
