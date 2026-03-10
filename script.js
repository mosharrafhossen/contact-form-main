

const form = document.getElementById("form")
const success = document.getElementById("success")

const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const message = document.getElementById("message")
const consent = document.getElementById("consent")

const query = document.querySelectorAll('input[name="query"]')

const queryError = document.getElementById("queryError")
const consentError = document.getElementById("consentError")

form.addEventListener("submit", function(e){

e.preventDefault()

let valid = true

document.querySelectorAll(".error").forEach(err=>{
err.style.display = "none"
})

document.querySelectorAll("input, textarea").forEach(input=>{
input.style.borderColor = "hsl(186,15%,59%)"
})


if(firstName.value.trim() === ""){
firstName.nextElementSibling.style.display = "block"
firstName.style.borderColor = "hsl(0,66%,54%)"
valid = false
}


if(lastName.value.trim() === ""){
lastName.nextElementSibling.style.display = "block"
lastName.style.borderColor = "hsl(0,66%,54%)"
valid = false
}


const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

if(!email.value.match(emailPattern)){
email.nextElementSibling.style.display = "block"
email.style.borderColor = "hsl(0,66%,54%)"

email.placeholder = "email@example.com"

valid = false
}


if(message.value.trim() === ""){
message.nextElementSibling.style.display = "block"
message.style.borderColor = "hsl(0,66%,54%)"
valid = false
}


let selected = false

query.forEach(q=>{
if(q.checked){
selected = true
}
})

if(!selected){
queryError.style.display = "block"
valid = false
}


if(!consent.checked){
consentError.style.display = "block"
valid = false
}


if(valid){

success.style.display = "flex"

setTimeout(()=>{

success.style.display = "none"
form.reset()

},4000)

}

})