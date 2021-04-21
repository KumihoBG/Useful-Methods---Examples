// replacing matching text
function edit(ref, match, replacer) {
    // using regex
    const matcher = new RegExp(match, 'g');
    // get variable for the result - change string with replace method
    const result = ref.textContent.replace(matcher, replacer);
    // set the new content found via result
    ref.textContent = result;
}