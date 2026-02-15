//validation
const login = document.getElementById("loginform");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordErr = document.getElementById("PassErr");
const emailErr = document.getElementById("emailErr");


login.addEventListener("submit" ,(e)=>{
    e.preventDefault();


    console.log(email.value)
    advancevalidation(email.value,password.value)
    console.log(advancevalidation(email.value,password.value));
    if (advancevalidation (email.value,password.value)){
        savedata(email.value,password.value);
    }

});

const firebaseConfig = {
  apiKey: "AIzaSyCZa2oeJpmSsUqZl5zz03uUW9yYRG-lUFI",
  authDomain: "loginpage-9e6b6.firebaseapp.com",
  databaseURL: "https://loginpage-9e6b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "loginpage-9e6b6",
  storageBucket: "loginpage-9e6b6.firebasestorage.app",
  messagingSenderId: "265148980999",
  appId: "1:265148980999:web:da1eb318c46ea83d22efa2"
};
  
const savedata = (email,password)=>{

   firebase.initializeApp(firebaseConfig);

   const db =  firebase.database().ref("RegForm");

   db.push({
  email: email,
  password: password,
});

}; 


const advancevalidation = (email,pass)=>{

    const passRegx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const emailRegx = /^\S+@\S+\.\S+$/

  
    var isvalid =true;
    if(pass.match(passRegx)){

        console.log("Pass is vaild")
        passwordErr.textContent = " ";
    }else{
        console.log("Pass is  not vaild")
        passwordErr.textContent = "password is must not contain at least ";

        isvalid=false    
    }


      if(email.match(emailRegx)){
       console.log("gmail is vaild") 
       emailErr.textContent ="";
    }else{
        console.log("email  is  not vaild")
        emailErr.textContent ="email is must not contain ";
        isvalid=false
    }
    return isvalid;

};

