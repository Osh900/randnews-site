import {
    national_news,
    science_and_tech,
    forign_news,
    extra,
    city,
    cable,
    finance,
    sports,
    fun,
    pop,
    long,
    nonprofit,
    polling_factcheck
} from './urls1.js';

const allURL = [
    ...national_news,
    ...science_and_tech,
    ...forign_news,
    ...extra,
    ...city,
    ...cable,
    ...finance,
    ...sports,
    ...fun,
    ...pop,
    ...nonprofit,
    ...polling_factcheck,
    ...long
];

const categoryURLs = {
    national_news,
    science_and_tech,
    forign_news,
    extra,
    city,
    cable,
    finance,
    sports,
    fun,
    pop,
    nonprofit,
    polling_factcheck,
    long
};

function openRandomURL(urlArray) {
    if (urlArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * urlArray.length);
        const randomUrl = urlArray[randomIndex];
        window.open(randomUrl, '_blank');
    } else {
        alert("No categories selected or no URLs available.");
    }
}

function openRandomURLInNewTab() {
    openRandomURL(allURL);
}

function openSelectedCategories() {
    const form = document.getElementById('category-form');
    const selectedCategories = Array.from(form.elements['category'])
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    const selectedURLs = selectedCategories.flatMap(category => categoryURLs[category] || []);
    openRandomURL(selectedURLs);
}

// Assign functions to the window object
window.openRandomURLInNewTab = openRandomURLInNewTab;
window.openSelectedCategories = openSelectedCategories;
