// Add logic to addExcitement that places an exclamation point(!) after every third word.Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3(using the JavaScript remainder operator) add a single exclamation point(!) to the current word in the array.

let sentenceWords = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

function addExcitement(theWordArray) {
    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */

        if ((i + 1) % 3 === 0) {
            buildMeUp += theWordArray[i] + "!" + " ";
        } else {
            buildMeUp += theWordArray[i] + " ";
        }

        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
}

addExcitement(sentenceWords);