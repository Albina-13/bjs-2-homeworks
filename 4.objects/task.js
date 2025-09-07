function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) {
		return;
	}
	for (let i = 0; i < marksToAdd.length; i++) {
		if (typeof marksToAdd[i] === 'number' && marksToAdd[i] >= 0 && marksToAdd[i] <= 100) {
			this.marks.push(marksToAdd[i]);
		} else {
			console.error(`Некорректная оценка: ${marksToAdd[i]}. Оценка должна быть числом от 0 до 100.`);
		}
	}
};

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}

	const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}