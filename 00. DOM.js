// Functions create and append

function createHTMLElements(tagName, textContent, attributes, event) {
  let newHTMLElement = document.createElement(tagName);
  if (textContent) {
      newHTMLElement.textContent = textContent;
  }
  if (attributes) {
      attributes.forEach(attribute => newHTMLElement.setAttribute(attribute.key, attribute.value))
  }
  if (event) {
      newHTMLElement.addEventListener(event.type, event.function);
  }
  return newHTMLElement;
}

function appendHTMLElements(parent, children) {
  children.forEach(child => parent.appendChild(child));
}
// Christmas gifts
function solution() {
    let buttonAdd = document.querySelector('.card > div > button');
    let addGiftsInput = document.querySelector('.card > div > input');
    let ulElement = document.querySelector('.card > ul');

    buttonAdd.addEventListener('click', e => {
        e.preventDefault();
        if (addGiftsInput.value == "") {
            return;
        }
        let liElement = document.createElement('li');
        liElement.textContent = addGiftsInput.value;
        liElement.setAttribute("class", "gift");
        let sendBtn = createElement('button', 'Send', "#sendButton", liElement);
        sendBtn.setAttribute("id", "sendButton");
        let discardBtn = createElement('button', 'Discard', "#discardButton", liElement);
        discardBtn.setAttribute("id", "discardButton");
        ulElement.appendChild(liElement);
        let newList = Array.from(ulElement.children);
        sortList(newList);
        addGiftsInput.value = "";

        sendBtn.addEventListener('click', e => {
            e.preventDefault();
            let ulGiftSection = document.querySelectorAll('section')[2].querySelector('ul');
            let currentLiElement = e.currentTarget.parentElement;
            removeAllChildNodes(currentLiElement);
            ulGiftSection.appendChild(liElement);
        })

        discardBtn.addEventListener('click', e => {
            e.preventDefault();
            let ulDiscardSection = document.querySelectorAll('section')[3].querySelector('ul');
            let currentLiElement = e.currentTarget.parentElement;
            removeAllChildNodes(currentLiElement);
            ulDiscardSection.appendChild(liElement);
        })
    })

    function removeAllChildNodes(parent) {
        while (parent.firstChild.nextSibling) {
            parent.removeChild(parent.firstChild.nextSibling);
        }
    }

    function sortList(ul) {
        let ulSorted = document.querySelector('.card > ul');
        Array.from(ulSorted.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => ulSorted.appendChild(li));
    }

    function createElement(type, content, attribute, appender) {
        const el = document.createElement(type);
        if (attribute.includes("class")) {
            el.setAttribute('class', attribute);
            el.textContent = content;
        } else if (attribute.includes("#")) {
            el.setAttribute('id', attribute);
            el.textContent = content;
        } else if (content) {
            el.textContent = content;
        }
        if (appender) {
            appender.appendChild(el);
        }
        return el;
    }
}

// Cinema 
function solve() {
  let name = document.querySelector('#container input:nth-of-type(1)');
  let hall = document.querySelector('#container input:nth-of-type(2)');
  let price = document.querySelector('#container input:nth-of-type(3)');
  let btnOnScreen = document.querySelector('#container button');
  let ulMoviesElement = document.querySelector('#movies > ul');
  let ulArchiveElement = document.querySelector('#archive > ul');
  let buttonClearElement = document.querySelector('#archive > button');


  btnOnScreen.addEventListener('click', e => {
      e.preventDefault();

      if (name.value === '' || hall.value === '' || price.value === '') {
          return;
      }

      if (!Number(price.value)) {
          return;
      }

      let liElement = document.createElement('li');
      let spanElement = document.createElement('span');
      spanElement.textContent = name.value;
      let strongElement = document.createElement('strong');
      strongElement.textContent = `Hall: ${hall.value}`;

      liElement.appendChild(spanElement)
      liElement.appendChild(strongElement)
      ulMoviesElement.appendChild(liElement)

      let divElement = document.createElement('div');
      let strongPriceElement = document.createElement('strong');
      strongPriceElement.textContent = Number(price.value).toFixed(2);
      let inputPriceElement = document.createElement('input');
      inputPriceElement.setAttribute('placeholder', 'TicketsSold');
      let buttonArchive = document.createElement('button');
      buttonArchive.textContent = 'Archive';

      divElement.appendChild(strongPriceElement);
      divElement.appendChild(inputPriceElement);
      divElement.appendChild(buttonArchive);

      liElement.appendChild(divElement);

      name.value = ''
      hall.value = ''
      price.value = ''

      buttonArchive.addEventListener('click', e => {
          e.preventDefault();

          if (!Number(inputPriceElement.value)) {
              return;
          }

          let currentPrice = Number(inputPriceElement.value) * Number(strongPriceElement.textContent);

          let liArchiveElement = document.createElement('li');
          let spanArchiveElement = document.createElement('span');
          spanArchiveElement.textContent = e.currentTarget.parentElement.parentElement.firstChild.textContent;
          let strongArchiveElement = document.createElement('strong');
          strongArchiveElement.textContent = `Total amount: ${Number(currentPrice).toFixed(2)}`
          let buttonDeleteElement = document.createElement('button');
          buttonDeleteElement.textContent = 'Delete';

          liArchiveElement.appendChild(spanArchiveElement);
          liArchiveElement.appendChild(strongArchiveElement);
          liArchiveElement.appendChild(buttonDeleteElement);

          ulArchiveElement.appendChild(liArchiveElement);

          e.currentTarget.parentElement.parentElement.remove()

          buttonDeleteElement.addEventListener('click', e => {
              e.preventDefault();
              e.currentTarget.parentElement.remove();
          })

          buttonClearElement.addEventListener('click', e => {
              e.preventDefault();
              let li = (e.currentTarget.parentElement.children[1].children);

              for (const el of li) {
                  el.remove();
              }
          })
      })
  })
}

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

// Add - delete item to a list
function addItem() {
  let list = document.getElementById('items')
  list.addEventListener('click', deleteItem);

  let newItemText = document.getElementById('newText');
  let newItem = document.createElement('li');
  newItem.innerHTML = `${newItemText.value} <a href="#">[Delete]</a>`;
  list.appendChild(newItem);
  newItemText.value = '';

  function deleteItem(item) {
      let element = item.target.parentNode;
      element.remove();
  }
}

// Delete by Email from a table row
function deleteByEmail() {
  let input = document.getElementsByName('email')[0].value.trim();
  let trs = document.getElementsByTagName('tr');
  let trToBeDeleted = '';
  let resultElement = document.getElementById('result');

  for (let tr of trs) {
      let td = tr.children[1];
      if(td.textContent === input){
          trToBeDeleted = tr;
          resultElement.innerText = 'Deleted.';
          trToBeDeleted.parentNode.removeChild(trToBeDeleted);
          return;
      }
  }

 resultElement.textContent = 'Not found.'
}

// Mouse hover percent of DIV
function attachGradientEvents() {
  let gradient = document.getElementById('gradient');
  gradient.addEventListener('mousemove', gradientMove);
  gradient.addEventListener('mouseout', gradientOut);
  
  function gradientMove(event) {
      let power = event.offsetX / (event.target.clientWidth - 1);
      power = Math.trunc(power * 100);
      document.getElementById('result').textContent = power + "%";
  }
  
  function gradientOut(event) {
      document.getElementById('result').textContent = "";
  }
}

// Blurred focused elements inputs
function focused() {
  let inputs = document.querySelectorAll('input[type="text"]');
  Array.from(inputs).forEach(x => {
      x.addEventListener('focus', function(e) {
          let parent = e.currentTarget.parentElement;
          parent.classList.add('focused');
      });
      x.addEventListener('blur', function(e) {
          let parent = e.currentTarget.parentElement;
          parent.classList.remove('focused');
      });
  });
}

// dynamic email validation
function validate() {
  let inputElement = document.getElementById('email');

  inputElement.addEventListener('change', e => {
      let currentValue = e.currentTarget.value;
      let pattern = /[a-z]+@[a-z]+.[a-z]+/g;

      if (pattern.test(currentValue)) {
          e.currentTarget.classList.remove('error');
      } else {
          e.currentTarget.classList.add('error');
      }
  });
}

// Shopping cart
function solve() {
  let buttons = document.querySelectorAll('.add-product');
  let checkoutButton = document.querySelector('.checkout');
  let textArea = document.getElementsByTagName('textarea');
  let totalMoney = [];
  let productsList = [];

  Array.from(buttons).forEach(x => {
     x.addEventListener('click', e => {
        let parent = e.currentTarget.parentElement.parentElement;
        let currentPrice = Number(parent.lastChild.previousSibling.textContent);
        let productName = parent.children[1].childNodes[1].textContent;
        let productInfo = `Added ${productName} for ${currentPrice.toFixed(2)} to the cart.\n`
        textArea[0].innerHTML += productInfo;
        totalMoney.push(currentPrice);
        productsList.push(productName);
     });
  });

  checkoutButton.addEventListener('click', e => {
     let finalList = [];
     for (let product of productsList) {
        if (!finalList.includes(product)) {
           finalList.push(product);
        }
     }

     let totalAmount = totalMoney.reduce((a, b) => a + b, 0);
     let result = `You bought ${finalList.join(', ')} for ${totalAmount.toFixed(2)}.`
     textArea[0].innerHTML += result;
     let buttonsList = document.getElementsByTagName('button');
     Array.from(buttonsList).forEach(button => {
        button.disabled = true;
     });
  });
}

// Time convertor
function attachEventsListeners() {
  let days = document.getElementById('days');
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  let convert = (sec) => {
      let day = sec / (24 * 60 * 60);
      let hour = sec / (60 * 60);
      let min = sec / 60;

      days.value = day;
      hours.value = hour;
      minutes.value = min;
      seconds.value = sec;
  }

  document.getElementById('daysBtn').addEventListener('click', () => {convert(Number(days.value) * 86400)});
  document.getElementById('hoursBtn').addEventListener('click', () => {convert(Number(hours.value) * 3600)});
  document.getElementById('minutesBtn').addEventListener('click', () => {convert(Number(minutes.value) * 60)});
  document.getElementById('secondsBtn').addEventListener('click', () => {convert(Number(seconds.value))});
}

// Drop down menu
function addItem() {
  let inputOne = document.getElementById('newItemText');
  let inputTwo = document.getElementById('newItemValue');
  let menu = document.getElementById('menu');
  let option = document.createElement('option');
  option.textContent = inputOne.value;
  option.value = inputTwo.value;
  menu.appendChild(option);
  inputOne.value = '';
  inputTwo.value = '';
}

// Encode - decode messages
function encodeAndDecodeMessages() {
  let textAreaOne = document.getElementsByTagName('textarea')[0];
  let textAreaTwo = document.getElementsByTagName('textarea')[1];
  let main = document.getElementById('main');

  main.addEventListener('click', (e) => {
      if (e.target.textContent.includes('Encode')) {
          let messageEncode = textAreaOne.value;
          let newString = "";
          for (let character of messageEncode) {
              let newCharacter = character.charCodeAt() + 1;
              let char = String.fromCharCode(newCharacter);
              newString += char;
          }
          textAreaOne.value = "";
          textAreaTwo.value = newString;
      } else if (e.target.textContent.includes('Decode')) {
          let messageDecode = textAreaTwo.value;
          let finalString = "";
          for (let character of messageDecode) {
              let newCharacter = character.charCodeAt() - 1;
              let char = String.fromCharCode(newCharacter);
              finalString += char;
          }
          textAreaTwo.value = finalString;
      }
  });
}


// Form validation
function validate() {
  document.querySelector("#submit").type = "button";
  document.querySelector("#company").addEventListener("change", (e) => {
      console.log(e.target);
      if (document.querySelector("#company").checked) {
          document.querySelector("#companyInfo").style.display = "block";
      } else {
          document.querySelector("#companyInfo").style.display = "none";
      }
  });

  document.querySelector("#submit").addEventListener("click", (e) => {
      let validOut = [];
      let userName = document.querySelector("#username");
      let email = document.querySelector("#email");
      let passWord = document.querySelector("#password");
      let confirmPass = document.querySelector("#confirm-password");
      let checkBox = document.querySelector("#company");
      let userTest = /^[A-Za-z0-9]{3,20}$/;
      let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
      let passTest = /^[\w]{5,15}$/;

      //console.log(checkBox.checked);

      if (userTest.exec(userName.value) === null) {
          userName.style.borderColor = "red";
          validOut.push(false);
      } else {
          userName.style.borderColor = "";
          validOut.push(true);
      }

      if (emailTest.exec(email.value) === null) {
          email.style.borderColor = "red";
          validOut.push(false);
      } else {
          email.style.borderColor = "";
          validOut.push(true);
      }

      if (
          passWord.value === confirmPass.value &&
          passTest.exec(confirmPass.value) != null &&
          passTest.exec(passWord.value) != null
      ) {
          confirmPass.style.borderColor = "";
          passWord.style.borderColor = "";
          validOut.push(true);
      } else {
          confirmPass.style.borderColor = "red";
          passWord.style.borderColor = "red";
          validOut.push(false);
      }

      if (checkBox.checked) {
          let company = document.querySelector("#companyNumber");
          if (company.value < 1000 || company.value > 9999) {
              company.style.borderColor = "red";
              validOut.push(false);
          } else {
              company.style.borderColor = "";
              validOut.push(true);
          }
      }

      if (!validOut.includes(false)) {
          document.querySelector("#valid").style.display = "block";
      } else {
          document.querySelector("#valid").style.display = "none";
      }
  });
}

// Hells kitchen 2
function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    const input = document.querySelector('#inputs textarea');
    const bestRestaurantParagraph = document.querySelector('#bestRestaurant p');
    const workersParagraph = document.querySelector('#workers p');
    function onClick() {
       let array = JSON.parse(input.value);
       let restaurants = {};
       array.forEach(line => {
          const tokens = line.split(' - ');
          const name = tokens[0];
          const workersArray = tokens[1].split(', ');
          let workers = [];
  
          for (const worker of workersArray) {
             const workerTokens = worker.split(' ');
             const salary = Number(workerTokens[1]);
             workers.push({ name: workerTokens[0], salary })
          }
          if(restaurants[name]) {
             workers = workers.concat(restaurants[name].workers);
          } 
          workers.sort((a, b) => b.salary - a.salary);
          const bestSalary = workers[0].salary;
          const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
          restaurants[name] = {
             workers,
             averageSalary,
             bestSalary
          }
       });
       let bestRestaurantSalary = 0;
       let bestRestaurant = undefined;
       for (const name in restaurants) {
          if (restaurants[name].averageSalary > bestRestaurantSalary) {
             bestRestaurant = { 
                name, 
                workers: restaurants[name].workers,
                bestSalary: restaurants[name].bestSalary,
                averageSalary: restaurants[name].averageSalary
                                     
             }
             bestRestaurantSalary = restaurants[name].averageSalary;
          }
       }
  
       bestRestaurantParagraph.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
       let workersResult = [];
       bestRestaurant.workers.forEach(worker => {
          workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
       });
  
       workersParagraph.textContent = workersResult.join(' ');
    }
 }