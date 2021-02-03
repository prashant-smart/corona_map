let Name = document.getElementById("inputUserName3");
let gmail = document.getElementById("inputEmail3");
let phone = document.getElementById("inputphone3");
let address = document.getElementById("inputaddress3");
let indicator = document.getElementsByClassName("indicator");
let sumbit = document.getElementsByClassName("btn")[0];
let setAlert = document.getElementsByClassName("alert1")[0]
let suggestion = document.getElementsByClassName("sugesstion");
let isname = false, isgmail = false, isphone = false, isaddress = false;


function checkvalidity() {
    let arrayofboolean = [isname, isgmail, isphone, isaddress];

    let arrayofvalue = [Name.value, gmail.value, phone.value, address.value];

    for (let key in arrayofboolean) {

        if (arrayofboolean[key]) {
            indicator[key].classList.remove('error');
            indicator[key].classList.add('sucess');
        }
        else if (arrayofvalue[key] == "") {
            indicator[key].classList.remove('sucess');
            indicator[key].classList.remove('error');
        }
        else if (!arrayofboolean[key]) {
            indicator[key].classList.remove('sucess');
            indicator[key].classList.add('error');
        }


    }


}

Name.addEventListener('input', () => {
    let regex = /^[_a-zA-Z]([a-zA-Z0-9]){2,10}$/;
    let name = Name.value;

    if (regex.test(name)) {
        indicator[0].classList.remove('error');
        indicator[0].classList.add('sucess');
        isname = true;
        suggestion[0].classList.remove("show1");
        suggestion[0].classList.add("block1");
    }
    else {
        indicator[0].classList.remove('sucess');
        indicator[0].classList.add('error');
        isname = false;
        suggestion[0].classList.remove("block1");
        suggestion[0].classList.add("show1");

    }
    if (name == "") {
        indicator[0].classList.remove('error');
        suggestion[0].classList.remove("show1");
        suggestion[0].classList.add("block1");

    }

})
gmail.addEventListener('input', () => {
    let regex = /^([-\-\.0-9a-zA-Z]+)@([a-zA-Z0-9]){3,10}\.([a-zA-Z]){2,7}$/;
    let Gmail = gmail.value;

    if (regex.test(Gmail)) {
        indicator[1].classList.remove('error');
        indicator[1].classList.add('sucess');
        isgmail = true;
        suggestion[1].classList.remove("show1");
        suggestion[1].classList.add("block1");
    }
    else {
        indicator[1].classList.remove('sucess');
        indicator[1].classList.add('error');
        isgmail = false;
        suggestion[1].classList.remove("block1");
        suggestion[1].classList.add("show1");

    }
    if (Gmail == "") {
        indicator[1].classList.remove('error');
        suggestion[1].classList.remove("show1");
        suggestion[1].classList.add("block1");
    }
})
phone.addEventListener('input', () => {
    let regex = /^[0-9]{10}$/;
    let Phone = phone.value;

    if (regex.test(Phone)) {
        indicator[2].classList.remove('error');
        indicator[2].classList.add('sucess');
        isphone = true;
        suggestion[2].classList.remove("show1");
        suggestion[2].classList.add("block1");
    }
    else {
        indicator[2].classList.remove('sucess');
        indicator[2].classList.add('error');
        isphone = false;
        suggestion[2].classList.remove("block1");
        suggestion[2].classList.add("show1");

    }
    if (Phone == "") {
        indicator[2].classList.remove('error');
        suggestion[2].classList.remove("show1");
        suggestion[2].classList.add("block1");

    }
})
address.addEventListener('input', () => {
    let regex = /^[a-zA-z0-9]/;
    let Address = address.value;

    if (regex.test(Address)) {
        indicator[3].classList.remove('error');
        indicator[3].classList.add('sucess');
        isaddress = true;
        suggestion[3].classList.remove("show1");
        suggestion[3].classList.add("block1");
    }
    else {
        indicator[3].classList.remove('sucess');
        indicator[3].classList.add('error');
        isaddress = false;
        suggestion[3].classList.remove("block1");
        suggestion[3].classList.add("show1");

    }
    if (Address == "") {
        indicator[3].classList.remove('error');
        indicator[3].classList.remove('sucess');
        suggestion[3].classList.remove("show1");
        suggestion[3].classList.add("block1");
    }
})
sumbit.addEventListener('click', (e) => {
    e.preventDefault();


    let errorhtml = `<div id="error" class="alert alert-warning alert-dismissible fade show " role="alert">
    <strong>Warning!</strong> You have to first resolve all error.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    let feilderror = `<div id="error" class="alert alert-warning alert-dismissible fade show " role="alert">
    <strong>Warning!</strong> You have to fill all feild.
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
        isaddress = isgmail = isname = isphone = false;
    }
    else {
        let validity = true;
        if (Name.value == "" || phone.value == "" || gmail.value == "" || address.value == "") {
            setAlert.innerHTML = feilderror;
            setAlert.classList.remove("block1");
            setAlert.classList.add("show1");
            validity = false;
        }
        if (validity) {
            setAlert.innerHTML = errorhtml;
            setAlert.classList.remove("block1");
            setAlert.classList.add("show1");
        }

    }
    checkvalidity();




})