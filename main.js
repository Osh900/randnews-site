import { national_news, science_and_tech, forign_news, extra, city, cable, finance, sports, fun, pop, long, nonprofit, polling_factcheck } from './urls1.js';

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

function openRandomURL(urlArray) {
    const randomIndex = Math.floor(Math.random() * urlArray.length);
    const randomUrl = urlArray[randomIndex];
    window.open(randomUrl, '_blank');
}

function openRandomURLInNewTab() {
    openRandomURL(allURL);
}

function open_national_news() {
    openRandomURL(national_news);
}

function open_science_and_tech() {
    openRandomURL(science_and_tech);
}

function open_forign_news() {
    openRandomURL(forign_news);
}

function open_extra() {
    openRandomURL(extra);
}

function open_city() {
    openRandomURL(city);
}

function open_cable() {
    openRandomURL(cable);
}

function open_finance() {
    openRandomURL(finance);
}

function open_sports() {
    openRandomURL(sports);
}

function open_fun() {
    openRandomURL(fun);
}

function open_pop() {
    openRandomURL(pop);
}

function open_nonprofit() {
    openRandomURL(nonprofit);
}

function open_polling_factcheck() {
    openRandomURL(polling_factcheck);
}

function open_long() {
    openRandomURL(long);
}

// Assign each function to a unique property on the window object
window.openRandomURLInNewTab = openRandomURLInNewTab;
window.open_national_news = open_national_news;
window.open_science_and_tech = open_science_and_tech;
window.open_forign_news = open_forign_news;
window.open_extra = open_extra;
window.open_city = open_city;
window.open_cable = open_cable;
window.open_finance = open_finance;
window.open_sports = open_sports;
window.open_fun = open_fun;
window.open_pop = open_pop;
window.open_nonprofit = open_nonprofit;
window.open_polling_factcheck = open_polling_factcheck;
window.open_long = open_long;
