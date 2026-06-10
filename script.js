let increment = document.getElementById("Enter");
let saveButton = document.getElementById("save-btn")
console.log(increment)
let count = 0;
function numbers(){
    count = count + 1;
    increment.innerText = count
}
function save(){
total = count + " - "
saveButton.textContent += total
increment.textContent = 0
count = 0
}
