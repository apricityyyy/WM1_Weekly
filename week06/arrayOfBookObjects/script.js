class Book {
    constructor(isbn, title, subtitle, author, published, publisher, pages, decription, website) {
        this.isbn = isbn;
        this.title = title;
        this.subtitle = subtitle;
        this.author = author;
        this.published = published;
        this.publisher = publisher;
        this.pages = pages;
        this.description = decription;
        this.website = website;
    }
}

const booksData = [
    {
        "isbn": "9781593279509",
        "title": "Eloquent JavaScript, Third Edition",
        "subtitle": "A Modern Introduction to Programming",
        "author": "Marijn Haverbeke",
        "published": "2018-12-04T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 472,
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "website": "http://eloquentjavascript.net/"
    },
    {
        "isbn": "9781491943533",
        "title": "Practical Modern JavaScript",
        "subtitle": "Dive into ES6 and the Future of JavaScript",
        "author": "Nicolás Bevacqua",
        "published": "2017-07-16T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 334,
        "description": "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
        "website": "https://github.com/mjavascript/practical-modern-javascript"
    },
    {
        "isbn": "9781593277574",
        "title": "Understanding ECMAScript 6",
        "subtitle": "The Definitive Guide for JavaScript Developers",
        "author": "Nicholas C. Zakas",
        "published": "2016-09-03T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 352,
        "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        "website": "https://leanpub.com/understandinges6/read"
    },
    {
        "isbn": "9781449365035",
        "title": "Speaking JavaScript",
        "subtitle": "An In-Depth Guide for Programmers",
        "author": "Axel Rauschmayer",
        "published": "2014-04-08T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 460,
        "description": "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
        "website": "http://speakingjs.com/"
    },
    {
        "isbn": "9781449331818",
        "title": "Learning JavaScript Design Patterns",
        "subtitle": "A JavaScript and jQuery Developer's Guide",
        "author": "Addy Osmani",
        "published": "2012-08-30T00:00:00.000Z",
        "publisher": "O'Reilly Media",
        "pages": 254,
        "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
        "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
    },
    {
        "isbn": "9798602477429",
        "title": "You Don't Know JS Yet",
        "subtitle": "Get Started",
        "author": "Kyle Simpson",
        "published": "2020-01-28T00:00:00.000Z",
        "publisher": "Independently published",
        "pages": 143,
        "description": "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
        "website": "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started"
    },
    {
        "isbn": "9781484200766",
        "title": "Pro Git",
        "subtitle": "Everything you neeed to know about Git",
        "author": "Scott Chacon and Ben Straub",
        "published": "2014-11-18T00:00:00.000Z",
        "publisher": "Apress; 2nd edition",
        "pages": 458,
        "description": "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
        "website": "https://git-scm.com/book/en/v2"
    },
    {
        "isbn": "9781484242216",
        "title": "Rethinking Productivity in Software Engineering",
        "subtitle": "",
        "author": "Caitlin Sadowski, Thomas Zimmermann",
        "published": "2019-05-11T00:00:00.000Z",
        "publisher": "Apress",
        "pages": 310,
        "description": "Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 \"Dagstuhl\" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
        "website": "https://doi.org/10.1007/978-1-4842-4221-6"
    }
]

const books = booksData.map(book => new Book(book.isbn, book.title,
    book.subtitle, book.author, book.published, book.publisher,
    book.pages, book.description, book.website));

let fields = ['isbn', 'title', 'pages', 'subtitle', 'author', 'published',
    'publisher', 'pages', 'description', 'website'];


let userInput = document.querySelector('input');
let message = document.querySelector('#message');

function listBooks() {
    let inputValue = userInput.value;
    let order = inputValue.includes('ASC') ? 'ASC' : 'DESC';
    inputValue = inputValue.replace(order, '');

    let field = inputValue.trim();
    let fieldValues = [];
    if (fields.includes(field)) {
        for (let book of books) {
            fieldValues.push(book[field]);
        }
    } else {
        message.innerHTML = `There is no field as ${field}`;
        return;
    }

    let sortedBooks = sortBooks(fieldValues, field, order);
    displayBooks(sortedBooks);
}

function sortBooks(fieldValues, fName, order) {
    let sortedIndices = quickSort(fieldValues, order);
    let result = [];

    for (let field of sortedIndices) {
        console.log("field: " + field);
        for (let book of books) {
            if (book[fName] == field) {
                result.push(book);
            }
        }
    }

    return result;
}

function displayBooks(sortedBooks) {
    console.log(sortedBooks);

    let resultHTML = sortedBooks.map(book => {
        // Check if the book object has the 'title' property
        if (book && book.title) {
            return `<div>${book.title}</div>`;
        } else {
            return `<div>Unknown Title</div>`;
        }
    }).join('');

    message.innerHTML = resultHTML;
}

function quickSort(arr, order) {
    if (arr.length < 2) {
      return arr;
    }
  
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let left = [];
    let right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) continue;
  
      if ((order === 'ASC' && arr[i] < pivot) || (order === 'DESC' && arr[i] > pivot)) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left, order), pivot, ...quickSort(right, order)];
  }
  

// Execute a function when the user presses a key on the keyboard
userInput.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById('checkButton').click();
    }
});

document.getElementById("checkButton").addEventListener("click", listBooks);