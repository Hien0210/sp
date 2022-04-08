const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : [];
console.log(currentUser); 
const signin = document.querySelector('.signin')
const signup = document.querySelector('.dangky')  
const parent = signin.parentElement 
console.log(parent);
if ( currentUser != 0){
    signin.style.display= 'none'
    signup.style.display= 'none'
    const tk = document.createElement('div')
    tk.innerHTML= `<div>
    <i class="fa-solid fa-user-tie"></i>
    <a href="https://hien0210.github.io/SignIn/index.html">`+currentUser.username+`</a>
    <button class = "signout"> Đăng xuất </button> 
</div>`
    parent.append(tk)
}
const signout = document.querySelector('.signout')
signout.onclick =() =>{
   delete currentUser.username
   delete currentUser.passwordUser
   delete currentUser.id
   delete currentUser.email
   delete currentUser.telephone
   localStorage.setItem("currentUser", JSON.stringify(currentUser));
    signin.style.display= 'block'
    signup.style.display= 'block'
    parent.removeChild(parent.lastElementChild);
}
if ( currentUser.username == undefined){
    signin.style.display= 'block'
    signup.style.display= 'block'
    parent.removeChild(parent.lastElementChild);
}