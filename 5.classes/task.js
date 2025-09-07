class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = Math.min(100, this.state * 1.5);
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (const book of this.books) {
			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				const book = this.books[i];
				this.books.splice(i, 1);
				return book;
			}
		}
		return null;
	}
}

//Тестовый сценарий
const myLibrary = new Library("Библиотека");

// Добавляем в библиотеку несколько печатных изданий разных типов
myLibrary.addBook(new NovelBook("Лев Толстой", "Война и мир", 1869, 1225));
myLibrary.addBook(new DetectiveBook("Агата Кристи", "Убийство в Восточном экспрессе", 1934, 256));
myLibrary.addBook(new Magazine("National Geographic", 2023, 100));

// Ищем книгу, изданную в 1919 году, или создаём её при необходимости
let foundBook = myLibrary.findBookBy("releaseDate", 1919);
if (!foundBook) {
	foundBook = new Book("Неизвестный автор", "Книга о 1919 годе", 1919, 300);
	myLibrary.addBook(foundBook);
}

// Выдаём любую книгу
const borrowedBook = myLibrary.giveBookByName("Война и мир");

// Повреждаем выданную книгу
borrowedBook.state = 20;

// Восстанавливаем выданную книгу
borrowedBook.fix();
borrowedBook.fix();
borrowedBook.fix();

// Пытаемся добавить восстановленную книгу обратно в библиотеку
myLibrary.addBook(borrowedBook);
console.log("Количество книг после возврата (если книга была добавлена): " + myLibrary.books.length);


class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		}

		if (!this.marks.hasOwnProperty(subject)) {
			this.marks[subject] = [];
		}

		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		}

		const marksArray = this.marks[subject];
		const sum = marksArray.reduce((acc, mark) => acc + mark, 0);
		return sum / marksArray.length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);

		if (subjects.length === 0) {
			return 0;
		}

		const totalAverage = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0);
		return totalAverage / subjects.length;
	}
}