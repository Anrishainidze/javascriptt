// var income = prompt("შეიყვანე თქვენი ხელფასი")
// if (income < 300){
//     alert("საშუალოზე დაბალი")
// }
// else if (income >= 300 && income <500){
//     alert("sashualo xelfasia")
// }
// else if (income >=500 && income < 2500){
//     alert("kargi xelfasia")
// }
// else{
//     alert("kargi xar jigaro")
// }
 

///პირველიი//

// for (მრიცხველის ინიციალიზაცია); [პირობა]; [მრიცხველის] [შეცვლა];
//    // მოქმედებები
// }

// const people = ["Tom" , "Alice", "Bob", "Sam"]
// for (let i = 0; i<people.length; i++){
//     console.log(people[i])
// }



//მეორეე//
//for .. In  
// for(ინდექსი in მასივი){
//     //   // მოქნედებები
//     // }
//   const peoples = ["Tom", "Alice", "Bob", "Sam"]
//   for(let index in peoples){
//     console.log(peoples[index])
// }


//მესამეე//
// While (პირობა)){
//      მოქმედებები
// }
//  const people = ["Ton", "Alice", "bob", "Sam"]
//  let index = 0;

//    while(index < people.length){
//     console.log(people[index])
//     index++;
//    }

   


//do .. while
//  let x = 1;

//  do{
//     console.log(x * x)
//     x ==
// } while(x<10)



/////////კენტები და ლუწები////////
// const numbers = [10,123,53,12,67,12,123,4565]

//  for (let i=0; i < numbers.length; i ++){
//     if (numbers [i] % 2==  0){
//         console.log("ლუწები",numbers[i])
//     }
//     else{
//         console.log("კენტები", numbers[i])
//     }
//  }




// function ფუნქციის სახელი (პარამეტრი) {
//     ინსტრუქციები
// }

// function display() {
//     document.write("Hello World")
// }

// display()

// function display(x, y) {
//      if(y ===undefined) y=x

//      let z = x * y;
//      console.log(z)
// }
// display(5,7)

// function display() {
//     let z = 1;
//     for (let i =0; i<arguments.length; i++)
//     arguments[i] = z * z 
//     console.log(z)
// }
// display(6)

// function display (x,func) {
//     let message = func(x)
//     document.write(message)
// }
// function welcomeMessage(time) {
//     if(time<12)
//     return "Good Morning"
//     else
//     return"Good Evening"
// }

//     display(12, welcomeMessage)



//     var x =5
//     function displaySquare() {
//         var z = x * x;
//     }
//     console.log(z)
// displaySquare()


// console.log(foo)
// const foo = "Tom"

// const c = a * b
// const a = 7;
// const b = 8;
// console.log(c)
// display()
// const display = function() {
//     alert("ola")
// }




const user = {

}

user.name = "Tom"
user.age = 25;

user.display = function (){
    console.log(user.name)
    console.log(user.age)
}
user.display()

let student = {
    name : "tom".
    age : 25,
    "full name" :"Tom Jones"
    "display info": function () {
        console.log(student.name)
    }


    student.display();

const country = {
    name :"შვეიცარია",
    languagfes: ["გერმანელი", "ინგლისელი", "იტალიური"]
    capital :{
        name:"ბერძნ",
        population : 123123
    },
    cities :[
        {name:"ciriusi",population : 123123},
        {name :"jenva", population : 1412},
        {name: "add", population:231231}
    ]
}

document.write("<h3>")