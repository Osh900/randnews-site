import { urls1 } from './urls1.js';
import { news } from './news.js';

function openRandomURLInNewTab() {
    const dex = Math.floor(Math.random() * urls1.length);
    const randomUrl = urls1[dex];
    window.open(randomUrl, '_blank');
}

function openNews() {
    const randomIndex = Math.floor(Math.random() * news.length);
    const randomNews = news[randomIndex];
    window.open(randomNews, '_blank');
}

// Assign each function to a unique property on the window object
window.openRandomURLInNewTab = openRandomURLInNewTab;
window.openNews = openNews;
