const form1  = document.querySelector('#Form1');
const form2  = document.querySelector('#Form2');
const form3  = document.querySelector('#Form3');

const nxt1 = document.querySelector('.next1');
const nxt2 = document.querySelector('.next2');
const prev1 = document.querySelector('.prev1');
const prev2 = document.querySelector('.prev2');

// const formgrp1 = document.querySelector('#formgrp1');
const progress = document.querySelector('.progress');
const error = document.querySelector('#error');


nxt1.addEventListener("click", () => {
 let data = [];
 let myVals = document.getElementsByName('info');
 let info;
  for (let i = 0; i < myVals.length; i++) {
    info = myVals[i].value;
      if(info === ""){
        setTimeout(() => {
          error.innerHTML = "Complete your information";
        }, 3000);
        return console.error("Complete info pls");
      }else{
        data.push(info);
      }
    }
    form1.style.left = "-473px";
    form2.style.left = "5px";
      // formgrp.style.height = "190vh";
    progress.style.width = "60%";
    error.innerHTML = "Scroll Up For More";
    console.log(data);  
 });
 

prev1.addEventListener("click", () => {
  error.innerHTML = "required";
  form1.style.left = "5px";
  form2.style.left = "473px";
  // formgrp1.style.height = "70vh";
  progress.style.width = "30%"
  
})


function myOrder(e) {
  if(e.target.id == "or-der"){
    const key = e.target;
    const choice = {
      goods: key.value,
      price: key.name 
    };
    review(choice);
    function review(item){
      const newtag = document.createElement('li'); 
      newtag.append(item.goods);
      // console.log(newtag);
      const newgoods = document.querySelector('.goods');
      newgoods.appendChild(newtag);

      const newpricetag = document.createElement('li');
      newpricetag.append(item.price);
      const newprice = document.querySelector('.price');
      newprice.appendChild(newpricetag);
    }  
  }else{
    console.error("mo");
  }

  // function calculateNewprice(){
    
  // }
 
   
  
}
nxt2.addEventListener("click", () => {
  form2.style.left = "-473px";
  form3.style.left = "0px";
  // formgrp1.style.height = "70vh";
  progress.style.width = "100%"
 
})

prev2.addEventListener("click", () => {
  form2.style.left = "0px";
  form3.style.left = "473px";
  // formgrp1.style.height = "190vh";
  progress.style.width = "60%"
})