const fullname=document.getElementById("fullname")
const email=document.getElementById("email")
const password=document.getElementById("password")
const forms=document.querySelector("form")
const table=document.querySelector("table tbody")
const tables=document.querySelector("table")
const body=document.querySelector("body")
const formStyle=document.querySelector(".form")
const demo=document.querySelector(".demo")
const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/

demo.innerHTML="*Password 6 simvoldan az olmadan boyuk,kicik,reqem ve simvoldan ibaret olmalidir."
demo.style.color="red"
demo.style.fontStyle="italic"

let data=localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
forms.addEventListener("submit",add)
function add(e){
    e.preventDefault()
    if(checkvalue(fullname) && checkvalue(email) && regex.test(password.value)){
        writeData(fullname,email,password)
        data.push(obj)
        localStorage.setItem("data",JSON.stringify(data))
        addItem()
        cleanItem()
        delet()
        tables.style.display="block"
        tables.style.border=0
    }else{
         email.style.borderColor="red"
         fullname.style.borderColor="red"
         password.style.borderColor="red"
    }
}

function checkvalue(element) {
    return element.value.trim() ? element.value.trim() : null
}
function cleanItem(){
    fullname.value=""
    email.value=""
    password.value=""
}

let obj
function writeData(fullname,email,password){
    obj= {
        fullname:fullname.value,
        email:email.value,
        password:password.value,
        id: Date.now()
    }
}

function addItem(){
    table.innerHTML=""
    data.forEach((item)=>{
        table.innerHTML+=
        `<tr>
        <td>${item.fullname}</td>
        <td>${item.email}</td>
        <td>${item.password}</td>
        <td><i onclick="removeItem(${item.id})" class="fa-solid fa-trash" style="color:red"></i></td>
        </tr>`
    })
    
}
addItem()
function removeItem(number){
   data=data.filter(item=>item.id!=number)
   localStorage.setItem("data",JSON.stringify(data))
   addItem()
}
function delet(){
    forms.style.display="none"
    body.style.background="white"
    formStyle.style.height="0"
}