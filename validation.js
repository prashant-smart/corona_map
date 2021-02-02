let Name = document.getElementById("inputUserName3");
let gmail = document.getElementById("inputEmail3");
let phone = document.getElementById("inputphone3");
let address = document.getElementById("inputaddress3");
let indicator = document.getElementsByClassName("indicator");
let sumbit = document.getElementsByClassName("btn")[0];
let setAlert = document.getElementsByClassName("alert1")[0]
let suggestion=document.getElementsByClassName("sugesstion")[0];
let isname = false, isgmail = false, isphone = false, isaddress = false;
Name.addEventListener('input', () => {
    let regex = /^[_a-zA-Z]([a-zA-Z0-9]){2,10}$/;
    let name = Name.value;
    
    if (regex.test(name)) {
        indicator[0].classList.remove('error');
        indicator[0].classList.add('sucess');
        isname = true;
        suggestion.classList.remove("show1");
        suggestion.classList.add("block1");
    }
    else {
        indicator[0].classList.remove('sucess');
        indicator[0].classList.add('error');
        isname = false;
        suggestion.classList.remove("block1");
        suggestion.classList.add("show1");

    }
    if (name == "") {
        indicator[0].classList.remove('error');
        suggestion.classList.remove("show1");
        suggestion.classList.add("block1");

    }

})
gmail.addEventListener('input', () => {
    let regex = /^([-\-\.0-9a-zA-Z]+)@([a-zA-Z0-9]){3,10}\.([a-zA-Z]){2,7}$/;
    let Gmail = gmail.value;
    
    if (regex.test(Gmail)) {
        indicator[1].classList.remove('error');
        indicator[1].classList.add('sucess');
        isgmail = true;
    }
    else {
        indicator[1].classList.remove('sucess');
        indicator[1].classList.add('error');
        isgmail = false;

    }
    if (Gmail == "") {
        indicator[1].classList.remove('error');

    }
})
phone.addEventListener('input', () => {
    let regex = /^[0-9]{10}$/;
    let Phone = phone.value;

    if (regex.test(Phone)) {
        indicator[2].classList.remove('error');
        indicator[2].classList.add('sucess');
        isphone = true;
    }
    else {
        indicator[2].classList.remove('sucess');
        indicator[2].classList.add('error');
        isphone = false;

    }
    if (Phone == "") {
        indicator[2].classList.remove('error');

    }
})
address.addEventListener('input', () => {
    let regex = /^[a-zA-z0-9]/;
    let Address = address.value;

    if (regex.test(Address)) {
        indicator[3].classList.remove('error');
        indicator[3].classList.add('sucess');
        isaddress = true;
    }
    else {
        indicator[3].classList.remove('sucess');
        indicator[3].classList.add('error');
        isaddress = false;

    }
    if (Address == "") {
        indicator[3].classList.remove('error');
        indicator[3].classList.remove('sucess');

    }
})
sumbit.addEventListener('click', (e) => {
    e.preventDefault();
    

    let errorhtml = `<div id="error" class="alert alert-warning alert-dismissible fade show " role="alert">
    <strong>Warning!</strong> You have to first resolve all error.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    let sucesshtml = `<div id="sucess" class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong> You resistration is recorded sucessfully.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    if (isname && isgmail && isaddress && isphone) {
        setAlert.innerHTML = sucesshtml;
        setAlert.classList.remove("block1");
        setAlert.classList.add("show1");
        Name.value = phone.value = gmail.value = address.value = "";
    }
    else {
        setAlert.innerHTML = errorhtml;
        setAlert.classList.remove("block1");
        setAlert.classList.add("show1");

    }
    isname = false, isgmail = false, isphone = false, isaddress = false;
    for (let i = 0; i < 4; i++) {
       indicator[i].classList.remove('sucess');
        indicator[i].classList.remove('error');
        }

   
})