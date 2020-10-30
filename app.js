const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.getElementById('error')

form.addEventListener('summit',(e) => {
    let message = []
    if (name.value === '' || name.value == null) {
        message.push("Name is Required")
    }
    if ()
    e.preventDefault()
}