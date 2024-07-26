
//Lesson 4: Assignments | JavaScript Objects

//Create contructor function for Book
function Book(title, author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//Implement a method within the Book object to display book information.
Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
}

// Create an Array, implement functions, search
// Store book object
//add book object to array
//search by title or Author

let bookcase = [];

function addBook(title, author, pages) {
    const newBook = new Book(title, author,pages);
    bookcase.push(newBook);
}

function searchByTitle(title) {
    return bookcase.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchByAuthor(author) {
    return bookcase.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

function filterBookBypageCount(maxpages) {
    return bookcase.filter(book => book.pages <= maxpages);
}

function formatBookDetails() {
    return bookcase.map(book => {
        return{
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`,
            pages: book.pages
        };
    });
}

addBook('The Alchemist', 'Paulo Coelho', 208);
addBook('Green Eggs and Ham', 'Dr. Seuss', 72);
addBook('The Girl with the Dragon Tattoo', 'Stieg Larsson', 465);
addBook('Remember Me?', 'Mary Higgins Clark', 339);
addBook('In time of cholera', 'Gabriel Garcia Marquez', 348);

console.log("Bookcase Collection:");
bookcase.forEach(book => console.log(book.displayInfo()));
console.log('=------------------------=');

console.log("\nSearch for books by title 'the':");
searchByTitle('the').forEach(book => console.log(book.displayInfo()));
console.log('=------------------------=');

console.log("\nSearch for books by author 'paulo':");
searchByAuthor('paulo').forEach(book => console.log(book.displayInfo()));
console.log('=------------------------=');

console.log('\nFilter books with 100 pages or less:');
filterBookBypageCount(100).forEach(book => console.log(book.displayInfo()));
console.log('=------------------------=');

console.log('\nFormatted book details:');
formatBookDetails().forEach(book => console.log(book));


// 2. Exploring Objects and Math in JavaScript

//Create a constructor function for the Account object with properties
//for accountNumber, balance, and owner.
console.log('-------------------------');

function BankAccount(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.balance = 0; 
    this.owner = owner;
};

//Task 2: Implement methods within the Account object to deposit and withdraw funds

BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    } else {
        console.log('Deposit amount must be positive.');
    }
};
console.log('-------------------------');
BankAccount.prototype.withdraw = function(amount) {
    if(amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    } else if (amount > this.balance) {
        console.log(`Insufficient funds. Cannot withdraw ${amount}.`);
    } else {
        console.log('Withdraw amount must be positive.');
    }
};

//calculate compound Interest

BankAccount.prototype.compoundInterest = function(years, annualRate) {
    const n = 1;
    const amount = this.balance * Math.pow(1 + annualRate / n, n * years);
    const roundedAmount = Math.ceil(amount);
    return roundedAmount;
};

// New BankAccount object (Example)
const account = new BankAccount(12345, 'Scrooge McDuck');
account.deposit(5000);
account.withdraw(200);
console.log('-------------------------');
const interestAmount = account.compoundInterest(5, 0.05);
console.log(`The amount of interest accumulated after 5 years is: ${interestAmount}`);
console.log('-------------------------');