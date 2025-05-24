async function queryEntry(question) {
    // Find text field and insert query
    let input = document.querySelector("rich-textarea > * > p");
    if (input) {
        input.textContent = question;

        // Find button and click
        setTimeout(() => {
            let submit = document.querySelector('button.send-button.submit[aria-label="Enviar mensaje"]');
            if (submit) {
                submit.click();
            }
        }, 50);
    } else {
        console.error("Could not find input element");
    }
}

async function fillQuery() {
    //Fetch query from url
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let question = params.question;
    console.log("Found question:", question);
    if (!question) {
        console.error("Could not find question");
        return;
    }
    //Document load status check
    window.onload = (event) => {
        setTimeout(() => queryEntry(question), 350)
    };
}
fillQuery();
