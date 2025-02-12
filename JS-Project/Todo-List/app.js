const form = document.querySelector("form")
const data = document.querySelector("#data")
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    function myfun() {
        const p = document.createElement("p")
        p.innerHTML = data.value
        const div = document.querySelector("div")
        div.appendChild(p)
        
    }
    myfun()
})
