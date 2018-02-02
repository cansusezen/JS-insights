
//1. Creating a constructor function

var Person = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(){
    return firstName + ' ' + lastName;
  }
}

var cansu = new Person('Cansu', 'Sezen')
console.log(cansu.fullName());

/*Another way of creating the object is to use the call method on the constructor object*/

// var cansu = {};
// Person.call(cansu, 'Cansu', 'Sezen');
// console.log(cansu);

/*One way for adding functions to (pseudo)classes is to add it to the class as a propery as above
(pro of this way is that it allows variable privacy, because it's a closure)
Another way is to add the function to the "prototype" property of the class*/

var Person = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function(){
  return this.firstName + ' ' + this.lastName;
}

var cansu = new Person('Cansu', 'Sezen')
console.log(cansu.fullName());

/*2. Implementing Inheritance*/
var Developer = function(title, firstName, lastName){
    Person.call(this, firstName, lastName);
    this.title = title;

};
Developer.prototype = Object.create(Person.prototype); //this implements the inhritance
Developer.prototype.developerName = function(){
  return this.title + ' ' +  this.firstName + ' ' + this.lastName;
}

var developer = new Developer('Sr. Developer', 'Cansu', 'Sezen');
console.log(developer.fullName());
console.log(developer.developerName());
