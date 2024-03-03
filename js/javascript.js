const firebaseConfig = {
    apiKey: "AIzaSyD1bYLeaXnd4ziC7mnVizOsfkh-0yJVKTY",
    authDomain: "art-gallary-c8203.firebaseapp.com",
    databaseURL: "https://art-gallary-c8203-default-rtdb.firebaseio.com",
    projectId: "art-gallary-c8203",
    storageBucket: "art-gallary-c8203.appspot.com",
    messagingSenderId: "364058960178",
    appId: "1:364058960178:web:6a54f40fab32ec0358b72b",
    measurementId: "G-BGFM375NW7"
  };
firebase.initializeApp(firebaseConfig);

var artgallaryDB = firebase.database().ref("artgallary");

document.getElementById('artgallary').addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var number = getElementVal("number");
    var bday = getElementVal("bday");
    var password = getElementVal("password");
    var cpassword = getElementVal("cpassword");
    // saveMessages(name,email,number,bday,password,cpassword);
    // console.log(name,email,number,bday,password,cpassword);
    saveMessages(name,email,number,bday,password,cpassword);
    
}
const saveMessages = (name,email,number,bday,password,cpassword) =>{
    var newArtForm = artgallaryDB.push(); 

    newArtForm.set({
        name:name,
        email: email,
        number: number,
        bday:bday,
        password:password,
        cpassword:cpassword,

    });
};
const getElementVal =(id) => {
    return document.getElementById(id).value;
};