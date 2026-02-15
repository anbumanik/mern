// console.log("Number 1 ");

// setTimeout(()=>{
//     console.log("Number 2");
// },2000)

// console.log("Number 3");

const user = document.getElementById("userName");
const user2 = document.getElementById("error");

// const dataApi = fetch("https://dummyjson.com/users").then((res)=>{
//     return res.json()
// }).then((data)=>{
//     user.textContent =data.users[0].firstName
//     user2.textContent =data.users[1].firstName
// }).catch((err)=>{
//     console.log(err)
// })

const fetchApi = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    user.textContent = data.users[1].firstName;
  } catch (err) {
    user2.textContent = "Network e";
  }
};

fetchApi();