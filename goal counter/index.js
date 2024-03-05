

// change the count-el in the html so that it reflects the new count
let saveEl=document.getElementById("save-el")
let countEl =document.getElementById("count-el")//camelcase whee you capitalise the second letter of the word rather than the first one ...pass in argument 
console.log(saveEl)
console.log(countEl)

let count= 0

function increment() {

   count=count+1
   countEl.innerText =count

  console.log(count)

}

function save() {

let countStr = count + " - " 
saveEl.innerText=  saveEl.innerText + countStr
// when we save we need to reset the count to zero
countEl.innerText= 0
count=0


    // console.log(countStr)
}



let saverEl=document.getElementById("saver-el")
let counterEl =document.getElementById("counter-el")//camelcase whee you capitalise the second letter of the word rather than the first one ...pass in argument 
console.log(saverEl)
console.log(counterEl)

let counter= 0

function decrement() {

   counter= counter+1
   counterEl.innerText =counter

  console.log(counter)

}



function saver() {

let counterStr = counter + " - " 
saverEl.innerText=  saverEl.innerText + counterStr
// when we save we need to reset the count to zero
counterEl.innerText= 0
counter=0
}

