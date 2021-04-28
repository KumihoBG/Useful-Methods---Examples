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

// Search elements in a table
function solve() {
  // listen for button click
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    // create array for manipulation
     const rows = Array.from(document.getElementsByTagName('tr'));
     const searchText = document.getElementById('searchField').value;
     // loop through the rows
     rows.forEach(tableElement => {
        const student = tableElement.textContent;
        // remove the class from the list
        tableElement.classList.remove('select');
        // compare the search text with the content
        if (searchText && student.indexOf(searchText) >= 0) {
          // add select class to the result to highlight it
           tableElement.classList.toggle('select');
        }
        // clear the input field
        document.getElementById('searchField').value = '';
     });
  }
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

// Pascal and Camel case functions
function solve() {
    let text = document.getElementById('text').value;
    const naming = document.getElementById('naming-convention').value;
    let words = [];
    let result = '';
    let first = '';
    let slice = '';
    const span = document.getElementById('result');
  
    switch(naming) {
      case "Camel Case": camelCase(text);  span.textContent = result; break;
      case "Pascal Case": pascalCase(text);  span.textContent = result; break;
      default:span.textContent = 'Error!'; break;
    }
  
    function camelCase(text) {
      words = text.split(' ');
      let temp = '';
      first = words.shift().toLowerCase();
  
      for (let i = 0; i < words.length; i++) {
        let current = words[i].toLowerCase();
        slice = current.slice(0,1);
        let newStr = current.replace(slice, slice.toUpperCase());
        temp += newStr;
      }
      return result = first + temp;
    }
  
    function pascalCase(text) {
      words = text.split(' ');
      let temp = '';
      for (let i = 0; i < words.length; i++) {
        let current = words[i].toLowerCase();
        slice = current.slice(0,1);
        let newStr = current.replace(slice, slice.toUpperCase());
        temp += newStr;
      }
      return result += temp;
    }
  }

  // Hell's Kitchen
  function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
 
    function onClick() {
        let arr = JSON.parse(document.querySelector('#inputs textarea').value);
        let objWinner = findBestRestaurant(arr);
        document.querySelector('#bestRestaurant>p').textContent = getMsgRest(objWinner);
        document.querySelector('#workers>p').textContent = getMsgEmp(objWinner.workers);
    }
 
    function getMsgRest(objWinner) {
        return `Name: ${objWinner.name} Average Salary: ${objWinner.avgSalary.toFixed(2)} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;
    }
 
    function getMsgEmp(workers) {
        return workers.map(w => `Name: ${w.worker} With Salary: ${w.salary}`).join(' ');
    }
 
    function findBestRestaurant(arr) {
        let resultRestaurants = arr.reduce((acc, e) => {
            let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
            workers = workers.map(w => {
                let [worker, salary] = w.split(' ');
                return {
                    worker: worker,
                    salary: +salary
                };
            });
            let foundRestraunt = acc.find(r => r.name === restaurant);
            if (foundRestraunt) {
                foundRestraunt.workers = foundRestraunt.workers.concat(workers);
            } else {
                acc.push({
                    name: restaurant,
                    workers: workers
                });
            }
            return acc;
        }, []);
 
        resultRestaurants.forEach((el, idx) => {
            el.inputOrder = idx;
            el.avgSalary = el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
            el.maxSalary = Math.max(...el.workers.map(w => w.salary));
        });
 
        resultRestaurants.sort((a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder);
        let bestRestaurant = resultRestaurants[0];
        bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
 
        return bestRestaurant;
    }
 }

 // Format the text
 function solve() {
  let textArea = document.getElementById('input').value;
  let sentence = textArea.split('.').filter(p => p.length > 0);
  let element = document.getElementById("output");

  const result = new Array(Math.ceil(sentence.length / 3))
    .fill()
    .map(_ => sentence.splice(0, 3));

  let pattern = /[\.]/gm;

  for (let i = 0; i < result.length; i++) {
    for (let string of result[i]) {
      let dot = pattern.exec(string);
      while (dot !== null) {
        string = string.replace(dot, '');
        dot = pattern.exec(string);
        result[i].pop();
        result[i].push(string);
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    const node = document.createTextNode(`${result[i].join('. ')}.`);
    const para = document.createElement('p');
    para.appendChild(node);
    element.innerHTML += `<p>${para.textContent}</p>`;
  }
}