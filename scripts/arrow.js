// Watch the video (see above) about arrow functions, and see if you can rewrite addExcitement using that syntax.

let sentenceWords4 = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

const addExcitementArrow = (theWordArray, punctuation, num) => {
    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */

        if ((i + 1) % 3 === 0) {
            buildMeUp += theWordArray[i];
            for (let j = 1; j <= num; j++) {
                buildMeUp += punctuation;
            }
            buildMeUp += " ";
        } else {
            buildMeUp += theWordArray[i] + " ";
        }

        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
};

// addExcitementArrow(sentenceWords4, "!", 4);