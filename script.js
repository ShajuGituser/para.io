async function fetchSubstitutions() {
    try {
        const response = await fetch('substitutions.json');
        const data = await response.json();
        return data.substitutions || {};
    } catch (error) {
        console.error('Error fetching substitutions:', error);
        return {};
    }
}

async function paraphrase() {
    const inputText = document.getElementById('inputText').value;

    // Fetch substitutions from the JSON file
    const wordSubstitution = await fetchSubstitutions();

    // Split the input text into words
    const words = inputText.split(' ');

    // Perform word substitution
    const paraphrasedWords = words.map(word => {
        // Check if the word is in the substitution dictionary
        return wordSubstitution[word.toLowerCase()] || word;
    });

    // Join the paraphrased words back into a sentence
    const paraphrasedText = paraphrasedWords.join(' ');

    // Display the paraphrased text
    document.getElementById('outputArea').innerText = paraphrasedText;
}
