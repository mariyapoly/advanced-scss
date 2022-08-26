const field = document.getElementById('message');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log(field.value)
})

window.addEventListener('course/form-fill', function( ev ) {
    field.setAttribute('value', ev.detail )
})


window.addEventListener('course/form-submit', function( ev ) {
    console.log(field.value)
})
