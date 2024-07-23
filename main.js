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

// Combine all categories into one array
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

// Map of category URLs for easy lookup
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

// Function to open a random URL from the provided array
function openRandomURL(urlArray) {
    if (urlArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * urlArray.length);
        const randomUrl = urlArray[randomIndex];
        window.open(randomUrl, '_blank');
    } else {
        alert("No URLs available in the selected category.");
    }
}

// Function to open a random URL from all categories
function openRandomURLInNewTab() {
    openRandomURL(allURL);
}

// Function to open a random URL from a specific category
function openCategory(category) {
    const urls = categoryURLs[category] || [];
    openRandomURL(urls);
}

// Function to handle selected categories from the form
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
window.openCategory = openCategory;
window.openSelectedCategories = openSelectedCategories;

// Function bindings for specific category buttons
window.open_national_news = () => openCategory('national_news');
window.open_science_and_tech = () => openCategory('science_and_tech');
window.open_forign_news = () => openCategory('forign_news');
window.open_extra = () => openCategory('extra');
window.open_city = () => openCategory('city');
window.open_cable = () => openCategory('cable');
window.open_finance = () => openCategory('finance');
window.open_sports = () => openCategory('sports');
window.open_fun = () => openCategory('fun');
window.open_pop = () => openCategory('pop');
window.open_polling_factcheck = () => openCategory('polling_factcheck');
window.open_long = () => openCategory('long');
window.open_nonprofit = () => openCategory('nonprofit');
