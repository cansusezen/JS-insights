/*1 - CREATING THE INSTANCE*/

/*One way to initialize the object in the prototype pattern:
passing an object of description for the properties as the
second parameter ofthe Object.create method*/

var Person = {
  fullName : function(){
    return this.firstName + ' ' + this.lastName;
  }
}


// var cansu = Object.create(Person, {firstName : {
//                                       value : 'Cansu'
//                                     },
//                                     lastName: {
//                                       value: 'Sezen'
//                                     }
//                                   });

//Now the function "fullName" is in the __proto__ property of the cansu object.
//console.log(cansu.fullName());

/******************************************************************************/

/*Another way to initialize the object is to define an init method in the object*/
// var Person = {
//   init : function (firstName, lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     return this;
//   },
//   fullName : function(){
//     return this.firstName + ' ' + this.lastName;
//   }
//
// }
// var cansu= Object.create(Person)
// cansu.init('Cansu', 'Sezen');
// console.log(cansu.fullName());

/*Yet another way is to define a factory function that returns the object*/

// var PersonFactory = function(firstName, lastName){
//   var person= Object.create(Person)
//   person.firstName = firstName;
//   person.lastName = lastName;
//   return person;
// }
//
// var cansu = PersonFactory('Cansu', 'Sezen');
// console.log(cansu.fullName());


/*2 - INHERITANCE*/

var Developer = Object.create(Person, {
        init: {
          value : function(title, firstName, lastName){
            this.title = title;
            this.firstName = firstName;
            this.lastName = lastName;
          }
        },
      developerName: {
        value: function (){
          return this.title + ' ' + this.firstName + ' ' + this.lastName;
        }
      }
});
var cansu = Object.create(Developer);
//Now cansu object points to the Developer object, the Developer object points to the Person object
//Therefore cansu object's __proto__ property has the Developer object, the __proto__ of Developer object has the Person object
cansu.init('Sr Developer' , 'Cansu' , 'Sezen');
console.log(cansu.fullName());
console.log(cansu.developerName());
