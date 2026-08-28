function hideAllScreens() {

    const screens = [

        "homeScreen",
        "archiveScreen",
        "timelineScreen",
        "manuscriptsScreen",
        "speechesScreen",
        "aiScreen"

    ];

    screens.forEach(function(id) {

        document
            .getElementById(id)
            .classList
            .add("hidden");

    });
}


function showHome() {

    hideAllScreens();

    document
        .getElementById("homeScreen")
        .classList
        .remove("hidden");

}


function openPage(page) {

    hideAllScreens();

    const screen =
        document.getElementById(
            page + "Screen"
        );

    if (screen) {

        screen.classList.remove("hidden");

    }

}


function playAudio() {

    const message =
        new SpeechSynthesisUtterance(
            "Welcome to the Ambedkar Digital Heritage Archive. This is the audio narration module."
        );

    message.lang = "en-IN";

    speechSynthesis.speak(message);

}


function askAI() {

    const question =
        document
            .getElementById("question")
            .value
            .trim();

    const answer =
        document.getElementById("answer");


    if (question === "") {

        answer.innerHTML =
            "Please enter a question.";

        return;

    }


    let response =
        "The AI Research Assistant connects archival sources, constitutional documents and knowledge resources to provide contextual answers about Dr. B. R. Ambedkar's ideas.";


    if (
        question
            .toLowerCase()
            .includes("constitution")
    ) {

        response =
            "Dr. B. R. Ambedkar played a central role in the drafting process of the Constitution of India and emphasized constitutional democracy, equality and social justice.";

    }


    if (
        question
            .toLowerCase()
            .includes("timeline")
    ) {

        response =
            "The archive timeline presents important events from Ambedkar's life, education, social movements and constitutional work.";

    }


    answer.innerHTML =
        "<strong>AI Assistant:</strong><br><br>"
        + response;

}


function fullscreenKiosk() {

    const kiosk =
        document.querySelector(".kiosk");

    if (kiosk.requestFullscreen) {

        kiosk.requestFullscreen();

    }

}


function goBack() {

    window.location.href =
        "../index.html";

}