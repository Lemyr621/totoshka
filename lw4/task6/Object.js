function Person(name,age) {
  this.name = name;
  this.age = age;
}
Person.prototype.SetName = function (name){
	this.name = name;
}

Person.prototype.SetAge = function (age){
	this.age = age;
}

Person.prototype.Print = function (){
	console.log("name: "+this.name);
  console.log("age: "+this.age);
}

function Student(name, age, group, course = 4){
	this.name = name;
	this.age = age;
	this.group = group;
	this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Person.prototype.NextCourse = function (){
	this.course++;
}

Student.prototype.Print = function (){
  console.log("name: "+this.name);
  console.log("age: "+this.age);
  console.log("group: "+this.group);
  console.log("course: "+this.course);
}

function Teacher(name, age, disciplines = []){
	this.name = name;
	this.age = age;
	this.disciplines = disciplines;
}

Teacher.prototype.__proto__ = Person.prototype;

Teacher.prototype.AddDiscipline = function (discipline){
	if(this.disciplines.indexOf(discipline) == -1){
		this.disciplines.push(discipline);
	}
}

Teacher.prototype.RemoveDiscipline = function (discipline){
  if (this.disciplines.indexOf(discipline) != -1) {
    this.disciplines.splice(this.disciplines.indexOf(discipline), 1);
  }
}

Teacher.prototype.Print = function (){
  console.log("name: "+this.name);
  console.log("age: "+this.age);
  console.log("disciplines: "+this.disciplines);
}

var person = new Person("Stason", 17);
person.Print();
person.SetAge(30);
person.SetName("Stanislav");
person.Print();

var stud = new Student("Ershan", 20, "GEK");
stud.Print();
stud.SetAge(25);
stud.SetName("Ershan-san");
stud.NextCourse();
stud.Print();

var tchr = new Teacher("Eikiti", 22);
tchr.Print();
tchr.AddDiscipline("web");
tchr.SetAge(24);
tchr.SetName("Onidzuka");
tchr.Print();
tchr.AddDiscipline("TRPO");
tchr.Print();
tchr.RemoveDiscipline("web");
tchr.Print();
