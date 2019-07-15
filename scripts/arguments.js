// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

let sentenceWords2 = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theWordArray, punctuation) {
    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */

        if ((i + 1) % 3 === 0) {
            buildMeUp += theWordArray[i] + punctuation + " ";
        } else {
            buildMeUp += theWordArray[i] + " ";
        }

        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
}

// addExcitement(sentenceWords2, "?");