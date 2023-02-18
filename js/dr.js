// button style chnange#######

let btnSend = document.querySelector('make appointment');
let btn = document.getElementById('submitButton');
let message = document.querySelector('make appointment');



// button style chnange#######

// firebase start ........................

function submitform() {

    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let number = document.getElementById('number').value;


    let daterimeLocal = document.getElementById('myDate').value;

    if (name == "" || email == "" || number == "") {
        window.alert('All Fields Are Required ');
        return;
    } else {
        btn.innerHTML = 'please wait...';
        let dataRef = db.collection('drData').doc();

        // The next data enter patient

        let dataRefer = db.collection('patient').doc();



        let data = {

            name,
            email,
            number,
            daterimeLocal,
            dataId: dataRef.id


        }

        // TEH 2


        dataRefer.set(data).then(() => {

            window.alert('add sucessfully')
            window.location.reload();

        })

        dataRef.set(data).then(() => {

            window.alert('add sucessfully')
            window.location.reload();

        })

    }



}


// firebase end




// Defining a function to validate form