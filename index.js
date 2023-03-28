// //alert("Hello world") 
// // let name = "Jack"
// // console.log(name)

// // const sessionName = "JavaScript"
// // console.log(sessionName)

// let num1=10, num2=30
// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)
// console.log(num1%num2)

// const condition = (num1>num2)
// console.log(condition)
// const condition2 = (num1<num2)
// console.log(condition2)

// let num3 = 50

// console.log(num3>=50)

// let isInRange = num3 >= 40 && num3 <= 60
// console.log(isInRange)

// isInRange = num3>=50 || num3>=100

// const names = ["Lee", "Oscar", "Jack"]
// console.log(names)

// const cartypes = ["Mini", "Jaguar", "BMW"]
// console.log(cartypes[0])

// const person = {
//     name: "Holly",
//     table: 3
// }
// const person2 = {
//     name: "Jasmine",
//     table: 3
// }
// console.log(person.name)


// function calculate(number){
// console.log(number.num6+number.num7)
// console.log(number.num6-number.num7)
// console.log(number.num6*number.num7)
// console.log(number.num6/number.num7)
// console.log(number.num6%number.num7)
// }

// //calculate([num6: 10, num7: 20])

// const people = [person, person2]

// for(let i=0; i<people.length; i++)
// {
//   console.log(people[i])  
// }

// let p = 0

// while(p<people.length[p])
// { 
// console.log(people[p])
// p++
// }

window.addEventListener("load", function(event){
 const label = document.getElementsByTagName("label")
 const form = document.querySelector("#contact-form")
 form.addEventListener("submit", (e)=>{e.preventDefault()
const formData = new FormData(form)
//const fullname = formData.get("fullname")
//console.log("fullname", fullname)
const actualData = Object.fromEntries(formData)
console.log("Actual Data", actualData)


})
//  for(let i=0; i< label.length; i++)
//     {
//     if(label[i].getAttribute=("id") == "fullnamelabel")}
//     {
//         label[i].style.color = "orange"
//         return
// } 

const neededLabel = document.getElementById('emaillabel')
neededLabel.style.color = "Orange"
})

const fullNameInput = document.querySelector("#fullname")
fullNameInput.addEventListener("input", function(event){
    console.log(fullNameInput.value)
})

    const message =document.querySelector("#messageinput")
    message.addEventListener("input", function(event)
    {console.log(message.value)
})

const emailInput =document.querySelector("#emailinput")
emailInput.addEventListener("input", function(event)
{console.log(emailInput.value)
})

