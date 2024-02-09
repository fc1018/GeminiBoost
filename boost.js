async function queryEntry(question) {
    //Find text field and insert query
    let input = document.querySelector("rich-textarea > * > p");
    input.textContent = question;
    //Find button and click
    setTimeout(() => {
        let submit = document.querySelector("input-area-v2 > div > div > div > div > div > button");
        submit.click();
    }, 50);
}

async function fillQuery() {
    //Fetch query from url
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let question = params.question;
    if (!question) {
        return;
    }
    //Document load status check
    window.onload = (event) => {
        setTimeout(() => queryEntry(question), 100)
    };
}
fillQuery();