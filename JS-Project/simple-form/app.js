const form = document.querySelector("form")
const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const select = document.querySelector("#country")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(`${name.value} ${email.value} ${select.value}`)
})
const ul = document.createElement("ul")
const body = document.querySelector("body")
body.appendChild(ul)
const li = document.createElement("li")
li.textContent = `Name: ${name.value} 
Email: ${email.value} 
Country: ${select.value}`
ul.appendChild(li)