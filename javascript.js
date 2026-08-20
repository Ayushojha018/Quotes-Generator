const quotes = [

    {
        id: 1,
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi",
        category: "motivational"
    },

    {
        id: 2,
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill",
        category: "success"
    },

    {
        id: 3,
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: "motivational"
    },

    {
        id: 4,
        text: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
        category: "life"
    },

    {
        id: 5,
        text: "Where there is love there is life.",
        author: "Mahatma Gandhi",
        category: "love"
    },

    {
        id: 6,
        text: "Knowing yourself is the beginning of all wisdom.",
        author: "Aristotle",
        category: "wisdom"
    },

    {
        id: 7,
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
        category: "motivational"
    },

    {
        id: 8,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "success"
    },

    {
        id: 9,
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
        category: "life"
    },

    {
        id: 10,
        text: "Love is composed of a single soul inhabiting two bodies.",
        author: "Aristotle",
        category: "love"
    },

    {
        id: 11,
        text: "Wisdom begins in wonder.",
        author: "Socrates",
        category: "wisdom"
    },

    {
        id: 12,
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan",
        category: "motivational"
    },

    {
        id: 13,
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
        category: "success"
    },

    {
        id: 14,
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        category: "life"
    },

    {
        id: 15,
        text: "The best thing to hold onto in life is each other.",
        author: "Audrey Hepburn",
        category: "love"
    },

    {
        id: 16,
        text: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
        category: "wisdom"
    },

    {
        id: 17,
        text: "Everything you can imagine is real.",
        author: "Pablo Picasso",
        category: "motivational"
    },

    {
        id: 18,
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
        category: "success"
    },

    {
        id: 19,
        text: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
        category: "life"
    },

    {
        id: 20,
        text: "Love all, trust a few, do wrong to none.",
        author: "William Shakespeare",
        category: "love"
    },

    {
        id: 21,
        text: "Knowledge speaks, but wisdom listens.",
        author: "Jimi Hendrix",
        category: "wisdom"
    },

    {
        id: 22,
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        category: "motivational"
    },

    {
        id: 23,
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
        category: "success"
    },

    {
        id: 24,
        text: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey",
        category: "life"
    },

    {
        id: 25,
        text: "Love is not only something you feel, it is something you do.",
        author: "David Wilkerson",
        category: "love"
    },

    {
        id: 26,
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu",
        category: "wisdom"
    },

    {
        id: 27,
        text: "Act as if what you do makes a difference. It does.",
        author: "William James",
        category: "motivational"
    },

    {
        id: 28,
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier",
        category: "success"
    },

    {
        id: 29,
        text: "Keep smiling, because life is a beautiful thing.",
        author: "Marilyn Monroe",
        category: "life"
    },

    {
        id: 30,
        text: "If you want to be loved, be lovable.",
        author: "Ovid",
        category: "love"
    },

    {
        id: 31,
        text: "The fool thinks himself to be wise, but the wise man knows himself to be a fool.",
        author: "William Shakespeare",
        category: "wisdom"
    },

    {
        id: 32,
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe",
        category: "motivational"
    },

    {
        id: 33,
        text: "Success demands a willingness to sacrifice.",
        author: "Unknown",
        category: "success"
    },

    {
        id: 34,
        text: "Every moment is a fresh beginning.",
        author: "T.S. Eliot",
        category: "life"
    },

    {
        id: 35,
        text: "A loving heart is the truest wisdom.",
        author: "Charles Dickens",
        category: "love"
    },

    {
        id: 36,
        text: "Silence is a source of great strength.",
        author: "Lao Tzu",
        category: "wisdom"
    },

    {
        id: 37,
        text: "You are never too old to set another goal.",
        author: "C.S. Lewis",
        category: "motivational"
    },

    {
        id: 38,
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        category: "success"
    },

    {
        id: 39,
        text: "Life shrinks or expands in proportion to one's courage.",
        author: "Anaïs Nin",
        category: "life"
    },

    {
        id: 40,
        text: "Love recognizes no barriers.",
        author: "Maya Angelou",
        category: "love"
    },

    {
        id: 41,
        text: "The mind is everything. What you think you become.",
        author: "Buddha",
        category: "wisdom"
    },

    {
        id: 42,
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
        category: "motivational"
    },

    {
        id: 43,
        text: "Success is not in never failing, but in rising every time you fall.",
        author: "Unknown",
        category: "success"
    },

    {
        id: 44,
        text: "Live each day as if your life had just begun.",
        author: "Johann Wolfgang von Goethe",
        category: "life"
    },

    {
        id: 45,
        text: "Love is the bridge between you and everything.",
        author: "Rumi",
        category: "love"
    },

    {
        id: 46,
        text: "He who asks a question is a fool for five minutes; he who does not ask remains a fool forever.",
        author: "Chinese Proverb",
        category: "wisdom"
    },

    {
        id: 47,
        text: "The harder the conflict, the greater the triumph.",
        author: "George Washington",
        category: "motivational"
    },

    {
        id: 48,
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
        category: "success"
    },

    {
        id: 49,
        text: "Life is short, and it is up to you to make it sweet.",
        author: "Sarah Louise Delany",
        category: "life"
    },

    {
        id: 50,
        text: "We are shaped and fashioned by what we love.",
        author: "Johann Wolfgang von Goethe",
        category: "love"
    }

];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const quoteText =
    document.getElementById("quoteText");

const quoteAuthor =
    document.getElementById("quoteAuthor");

const quoteCategory =
    document.getElementById("quoteCategory");

const categorySelect =
    document.getElementById("categorySelect");

const searchInput =
    document.getElementById("searchInput");

const newQuoteBtn =
    document.getElementById("newQuoteBtn");

const copyBtn =
    document.getElementById("copyBtn");

const shareBtn =
    document.getElementById("shareBtn");

const likeBtn =
    document.getElementById("likeBtn");

const likeIcon =
    document.getElementById("likeIcon");

const themeBtn =
    document.getElementById("themeBtn");

const favoritesBtn =
    document.getElementById("favoritesBtn");

const favoriteCount =
    document.getElementById("favoriteCount");

const statsFavorites =
    document.getElementById("statsFavorites");

const quoteCounter =
    document.getElementById("quoteCounter");

const quoteContent =
    document.getElementById("quoteContent");

const quoteActions =
    document.getElementById("quoteActions");

const loadingState =
    document.getElementById("loadingState");

const errorState =
    document.getElementById("errorState");

const emptyState =
    document.getElementById("emptyState");

const retryBtn =
    document.getElementById("retryBtn");

const clearSearchBtn =
    document.getElementById("clearSearchBtn");

const modalOverlay =
    document.getElementById("modalOverlay");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const favoritesList =
    document.getElementById("favoritesList");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* =====================================================
   APPLICATION STATE
===================================================== */

let currentQuote = null;

let viewedQuotes = 1;

let favorites =
    JSON.parse(
        localStorage.getItem("quoteFavorites")
    ) || [];

let darkMode =
    localStorage.getItem("quoteDarkMode") === "true";


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    initializeApp
);


function initializeApp() {

    if (darkMode) {
        document.body.classList.add("dark");

        themeBtn.textContent = "☀️";
    }

    updateFavoriteCount();

    showRandomQuote();

}


/* =====================================================
   FILTER QUOTES
===================================================== */

function getFilteredQuotes() {

    const category =
        categorySelect.value;

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    return quotes.filter(quote => {

        const matchesCategory =
            category === "all" ||
            quote.category === category;


        const matchesSearch =
            !search ||
            quote.text
                .toLowerCase()
                .includes(search) ||

            quote.author
                .toLowerCase()
                .includes(search);


        return (
            matchesCategory &&
            matchesSearch
        );

    });

}


/* =====================================================
   RANDOM QUOTE
===================================================== */

function showRandomQuote() {

    showLoading();

    setTimeout(() => {

        try {

            const filteredQuotes =
                getFilteredQuotes();


            if (filteredQuotes.length === 0) {

                showEmpty();

                return;

            }


            let randomQuote;

            /*
             * Prevent the same quote from appearing
             * twice consecutively when possible.
             */

            if (filteredQuotes.length > 1) {

                do {

                    const randomIndex =
                        Math.floor(
                            Math.random() *
                            filteredQuotes.length
                        );

                    randomQuote =
                        filteredQuotes[randomIndex];

                } while (
                    currentQuote &&
                    randomQuote.id === currentQuote.id
                );

            } else {

                randomQuote =
                    filteredQuotes[0];

            }


            currentQuote =
                randomQuote;


            viewedQuotes++;

            quoteCounter.textContent =
                viewedQuotes;


            displayQuote(
                currentQuote
            );


            showQuoteContent();

        }

        catch (error) {

            console.error(error);

            showError();

        }

    }, 350);

}


/* =====================================================
   DISPLAY QUOTE
===================================================== */

function displayQuote(quote) {

    quoteText.textContent =
        quote.text;

    quoteAuthor.textContent =
        quote.author;

    quoteCategory.textContent =
        quote.category;

    updateFavoriteButton();

}


/* =====================================================
   LOADING STATE
===================================================== */

function showLoading() {

    quoteContent.classList.add("hidden");

    quoteActions.classList.add("hidden");

    emptyState.classList.add("hidden");

    errorState.classList.add("hidden");

    loadingState.classList.remove("hidden");

}


/* =====================================================
   NORMAL STATE
===================================================== */

function showQuoteContent() {

    loadingState.classList.add("hidden");

    emptyState.classList.add("hidden");

    errorState.classList.add("hidden");

    quoteContent.classList.remove("hidden");

    quoteActions.classList.remove("hidden");

}


/* =====================================================
   ERROR STATE
===================================================== */

function showError() {

    loadingState.classList.add("hidden");

    quoteContent.classList.add("hidden");

    quoteActions.classList.add("hidden");

    emptyState.classList.add("hidden");

    errorState.classList.remove("hidden");

}


/* =====================================================
   EMPTY STATE
===================================================== */

function showEmpty() {

    loadingState.classList.add("hidden");

    quoteContent.classList.add("hidden");

    quoteActions.classList.add("hidden");

    errorState.classList.add("hidden");

    emptyState.classList.remove("hidden");

}


/* =====================================================
   FAVORITES
===================================================== */

function toggleFavorite() {

    if (!currentQuote) {
        return;
    }


    const index =
        favorites.findIndex(
            quote =>
                quote.id === currentQuote.id
        );


    if (index === -1) {

        favorites.push(currentQuote);

        showToast(
            "Added to favorites ❤️"
        );

    } else {

        favorites.splice(index, 1);

        showToast(
            "Removed from favorites"
        );

    }


    saveFavorites();

    updateFavoriteCount();

    updateFavoriteButton();

}


/* =====================================================
   UPDATE FAVORITE BUTTON
===================================================== */

function updateFavoriteButton() {

    if (!currentQuote) {
        return;
    }


    const isFavorite =
        favorites.some(
            quote =>
                quote.id === currentQuote.id
        );


    if (isFavorite) {

        likeIcon.textContent = "♥";

        likeBtn.classList.add("active");

    } else {

        likeIcon.textContent = "♡";

        likeBtn.classList.remove("active");

    }

}


/* =====================================================
   SAVE FAVORITES
===================================================== */

function saveFavorites() {

    localStorage.setItem(
        "quoteFavorites",
        JSON.stringify(favorites)
    );

}


/* =====================================================
   UPDATE FAVORITE COUNT
===================================================== */

function updateFavoriteCount() {

    const count =
        favorites.length;


    favoriteCount.textContent =
        count;

    statsFavorites.textContent =
        count;

}


/* =====================================================
   COPY QUOTE
===================================================== */

async function copyQuote() {

    if (!currentQuote) {
        return;
    }


    const text =
        `"${currentQuote.text}" — ${currentQuote.author}`;


    try {

        await navigator.clipboard.writeText(
            text
        );

        showToast(
            "Quote copied to clipboard 📋"
        );

    }

    catch (error) {

        /*
         * Fallback for browsers where
         * Clipboard API is unavailable.
         */

        const textarea =
            document.createElement("textarea");

        textarea.value = text;

        document.body.appendChild(
            textarea
        );

        textarea.select();

        document.execCommand("copy");

        textarea.remove();

        showToast(
            "Quote copied 📋"
        );

    }

}


/* =====================================================
   SHARE QUOTE
===================================================== */

async function shareQuote() {

    if (!currentQuote) {
        return;
    }


    const text =
        `"${currentQuote.text}" — ${currentQuote.author}`;


    if (navigator.share) {

        try {

            await navigator.share({

                title: "Inspirational Quote",

                text: text

            });

        }

        catch (error) {

            /*
             * User cancelled share dialog.
             */

            console.log(
                "Share cancelled"
            );

        }

    }

    else {

        await copyQuote();

        showToast(
            "Sharing unavailable. Quote copied instead."
        );

    }

}


/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
    "input",
    () => {

        const results =
            getFilteredQuotes();


        if (results.length === 0) {

            showEmpty();

        }

        else {

            showRandomQuote();

        }

    }
);


/* =====================================================
   CATEGORY
===================================================== */

categorySelect.addEventListener(
    "change",
    () => {

        showRandomQuote();

    }
);


/* =====================================================
   CLEAR SEARCH
===================================================== */

clearSearchBtn.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        categorySelect.value = "all";

        showRandomQuote();

    }
);


/* =====================================================
   NEW QUOTE
===================================================== */

newQuoteBtn.addEventListener(
    "click",
    showRandomQuote
);


/* =====================================================
   RETRY
===================================================== */

retryBtn.addEventListener(
    "click",
    showRandomQuote
);


/* =====================================================
   FAVORITE BUTTON
===================================================== */

likeBtn.addEventListener(
    "click",
    toggleFavorite
);

/*=======================================================
   COPY BUTTON
========================================================*/

copyBtn.addEventListener(
    "click",
    copyQuote
);

/*========================================================
    SHARE BUTTON
=========================================================*/

shareBtn.addEventListener(
    "click",
    shareQuote
);

/*========================================================
   DARK MODE
========================================================*/


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        darkMode =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "quoteDarkMode",
            darkMode
        );


        themeBtn.textContent =
            darkMode
                ? "☀️"
                : "🌙";

    }
);


/* =====================================================
   FAVORITES MODAL
===================================================== */

favoritesBtn.addEventListener(
    "click",
    openFavorites
);


closeModalBtn.addEventListener(
    "click",
    closeFavorites
);


modalOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            modalOverlay
        ) {

            closeFavorites();

        }

    }
);


/* =====================================================
   OPEN FAVORITES
===================================================== */

function openFavorites() {

    renderFavorites();

    modalOverlay.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE FAVORITES
===================================================== */

function closeFavorites() {

    modalOverlay.classList.add(
        "hidden"
    );

    document.body.style.overflow =
        "";

}


/* =====================================================
   RENDER FAVORITES
===================================================== */

function renderFavorites() {

    favoritesList.innerHTML = "";


    if (favorites.length === 0) {

        favoritesList.innerHTML = `

            <div class="state">

                <div class="state-icon">
                    💔
                </div>

                <h3>
                    No favorite quotes
                </h3>

                <p>
                    Save quotes you love and
                    they will appear here.
                </p>

            </div>

        `;

        return;

    }


    favorites.forEach(
        quote => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "favorite-item";


            item.innerHTML = `

                <button
                    class="remove-favorite"
                    data-id="${quote.id}"
                    aria-label="Remove favorite"
                >
                    ×
                </button>

                <p>
                    “${escapeHTML(quote.text)}”
                </p>

                <small>
                    — ${escapeHTML(quote.author)}
                </small>

            `;


            favoritesList.appendChild(
                item
            );

        }
    );


    document
        .querySelectorAll(
            ".remove-favorite"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(
                            button.dataset.id
                        );


                    favorites =
                        favorites.filter(
                            quote =>
                                quote.id !== id
                        );


                    saveFavorites();

                    updateFavoriteCount();

                    updateFavoriteButton();

                    renderFavorites();

                    showToast(
                        "Favorite removed"
                    );

                }
            );

        });

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        value;

    return div.innerHTML;

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =====================================================
   KEYBOARD SHORTCUT
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        /*
         * Space = New Quote
         *
         * Don't trigger it when the
         * user is typing in an input.
         */

        const activeElement =
            document.activeElement;


        const isTyping =
            activeElement.tagName ===
                "INPUT" ||

            activeElement.tagName ===
                "TEXTAREA" ||

            activeElement.tagName ===
                "SELECT";


        if (
            event.code === "Space" &&
            !isTyping &&
            modalOverlay.classList.contains(
                "hidden"
            )
        ) {

            event.preventDefault();

            showRandomQuote();

        }


        /*
         * Escape = close modal
         */

        if (
            event.key === "Escape" &&
            !modalOverlay.classList.contains(
                "hidden"
            )
        ) {

            closeFavorites();

        }

    }
);