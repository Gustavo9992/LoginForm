const pass = document.querySelector('#pass')
const btn = document.querySelector('#visibility-toggle')

btn.addEventListener('click', () => {
    if (pass.type === 'text') {
        pass.type = 'password'
        btn.innerHTML = 'visibility'
    } else {
        pass.type = 'text'
        btn.innerHTML = 'visibility_off'
    }
})