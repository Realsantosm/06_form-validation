const pwdInp = document.querySelector('#password');
const cPwdInp = document.querySelector('#c_password');

let fstPwd = pwdInp.value;
let sndPwd = cPwdInp.value;

function confirmPwd() {
    // preventDefault();
    if(fstPwd === sndPwd) {
        
    }

}

cPwdInp.addEventListener('click', confirmPwd);

