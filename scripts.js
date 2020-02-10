const rawText = document.querySelector("[name='raw']");
const resultText = document.querySelector("[name='result']");

const filters = document.querySelectorAll("[name='filter']");

// EVENT HANDLERS
// Set result as raw text
function writeResults(e) {
    const inputText = e.currentTarget.value
    resultText.textContent = inputText
}

// Set result - every other letter, capitalize
function transformText(e) {
    const currentText = e.currentTarget.value;

    const oddCapitalize = function (letter, index) {
        if (index % 2 === 0) {
            return letter.toUpperCase();
        }
        else {
            return letter.toLowerCase();
        }
    };

    const transformed = currentText.split('').map(oddCapitalize).join('')
    resultText.textContent = transformed
}


// EVENT LISTENERS
const selectedHandler = function(e){
    console.log(e.currentTarget)

    switch(e.currentTarget.value) {
        case 'default':
            rawText.removeEventListener("input", transformText)
            rawText.addEventListener("input", writeResults)
            console.log('DEFAULT ACTIVE')
            break;
        case 'spongebob':
            rawText.removeEventListener("input", writeResults)
            rawText.addEventListener("input", transformText)
            console.log('SPONGEBOB ACTIVE')
            break;
        default:
            console.log("nothing Actice")
    }
};


filters.forEach(function(filter) {
    filter.addEventListener("input", selectedHandler)
})
