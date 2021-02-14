export const formatSentence = (sentence) => {
    // Change first character to uppercase. Exclude oz and anything betwwen ()
    const excludes = ['oz'];
    const words = sentence.toLowerCase().split(' ');
    let newSentence = [];
    let notInParenth;

    // if word is not in excludes or not in (), make first character uppercase.
    words.forEach((word) => {

        if (word.includes('(')){
            notInParenth = true;
        }

        if (excludes.indexOf(word) === -1 && !notInParenth) {
            let newWord = word.charAt(0).toUpperCase() + word.slice(1);
            newSentence.push(newWord);
        } else if (notInParenth) {
            newSentence.push(word);
        } else {
            newSentence.push(word);
        }

        if (word.includes(')')) {
            notInParenth = false;
        }
    })
    
    return newSentence.join(' ').trim();
}