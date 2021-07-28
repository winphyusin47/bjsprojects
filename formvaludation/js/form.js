const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById('email');
const password=document.getElementById("password");
const cfnpassword=document.getElementById("cfnpassword");

// Event Listener(mehod1)
// form.addEventListener("submit",function(e){
    // console.log(e);
    // e.preventDefault();
    // console.log(e);

    // if(username.value ===""){
    //     showerror(username,"Username is required");
    // }else{
    //     showsuccess(username);
    // }
    // if(email.value===""){
    //     showerror(email,"email is required");
    // }else if(!validateEmail(email.value)){
    //     showerror(email,"Email is not valid");
    // }else{
    //     showsuccess(email);
    // }
    // if(password.value===""){
    //     showerror(password,"Password is required");
    // }else{
    //     showsuccess(password);
    // }
    // if(cfnpassword.value===""){
    //     showerror(cfnpassword,"Password is required");
    // }else if(password.value !== cfnpassword.value){
    //     showerror(cfnpassword,"Password do not match");
    // }else{
    //         showsuccess(cfnpassword);
    // }
// })

function showerror(input,message){
    const formcontrol=input.parentElement;
    formcontrol.className="form-control error";

    const small=formcontrol.querySelector("small");
    small.innerText=message;
}
function showsuccess(input){
    const formcontrol=input.parentElement;
    // formcontrol.className='form-control success';
    formcontrol.classList.remove("error");
    formcontrol.classList.add("success");
}

// for checking email format
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// Check Required Field
function checkrequired(inputarr){
    // console.log(inputarr);
    inputarr.forEach(function(input){
        // console.log(input);
        // console.log(input.value);
        // console.log(input.id);
        if(input.value===""){
            showerror(input,`${getfieldname(input)} is required`);
        }else{
            showsuccess(input);
        }

    })
}
// Get Field Name
function getfieldname(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
// Check email valid
function checkemail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value)){
        showsuccess(input);
    }else{
        showerror(input,"Email is not valid");
    }
}
// Check Password
function checkpassword(input){
    if(input.value !== password.value){
        showerror(input,"Password do not match");
    }
}
// Check Input Length
function checklength(input,min,max){
    if(input.value.length<min){
        showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input,`${getfieldname(input)} must be less than ${max} characters`);
    }else{
        showsuccess(input);
    }
}
// Event listener(method 2)
form.addEventListener("submit",function(e){
    e.preventDefault();
    // console.log("hey");
    checkrequired([username,email,password,cfnpassword]);

    checklength(username,3,15);
    checklength(password,6,25);

    checkemail(email);
    checkpassword(cfnpassword);
})