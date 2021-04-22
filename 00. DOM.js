// replacing matching text
function edit(ref, match, replacer) {
    // using regex
    const matcher = new RegExp(match, 'g');
    // get variable for the result - change string with replace method
    const result = ref.textContent.replace(matcher, replacer);
    // set the new content found via result
    ref.textContent = result;
}

// using regex
function extract(id) {
    const text = document.getElementById(id).textContent;
    const regex = /\((.+?)\)/g;
    let result = [];
    let match = regex.exec(text);

    while (match != null) {
        result.push(match[1]);
        match = regex.exec(text);
    }

    return result.join('; ');
}

// sum elements in dom
function sumTable() {
    const rows = [...document.querySelectorAll('table tr')].slice(1, -1);
    document.getElementById('sum').textContent = rows.reduce((sum, row) => {
        return sum + Number(row.lastElementChild.textContent);
    }, 0);
}

// colorize table
function colorize() {
    [...document.querySelectorAll('table tr:nth-child(even)')].forEach(el => el.style.backgroundColor = 'teal');
}

// show more content
function showText() {
    document.getElementById('more').style.display = 'none'
    document.getElementById('text').style.display = 'inline';
}
