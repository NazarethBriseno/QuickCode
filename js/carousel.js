//For carousel
const carousel = $('.carousel');
const cards = $('.carousel-flashcard');
const prevButton = $('.prev');
const nextButton = $('.next');
let currentIndex = 0;
cards.each((index, card) => {
    $(card).click(() => {
        $(card).toggleClass('flipped');
    });

    if (index === currentIndex) {
        $(card).addClass('active');
    } else {
        $(card).removeClass('active');
    }
});
prevButton.click(() => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
});
nextButton.click(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
});
function updateCards() {
    cards.each((index, card) => {
        if (index === currentIndex) {
            $(card).addClass('active');
        } else {
            $(card).removeClass('flipped');
            $(card).removeClass('active');
        }
    });
}
//For carousel