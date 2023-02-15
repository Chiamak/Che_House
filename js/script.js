// function catalogue(){
//     let dog = document.getElementById('none');
//     dog.style.display = 'flex';
// }
// function choice(){
//     if(event.target.matches('input')){
//         const key = event.target;
//         const keyContent = [key.value];
//         keyContent.forEach(output); 

//         function output(item){
//             let two = document.createElement('li');
//             two.append(item);
//             let order = document.getElementById('ORDER');
//             order.appendChild(two);

            
//             let ups = document.createElement('li');
//             ups.append(raw());
//             let bow = document.getElementById('PRICE');
//             bow.appendChild(ups);
//         }          
//     }else{
//         let order = document.getElementById('ORDER');
//         order.innerHTML = " ";  
//     }
// }
// function raw(){
//     let lift = document.getElementById('number').value;
//     const key = event.target;
//     const price = key.name;
//     let win = parseInt(lift, 10) * parseInt(price, 10);
//     return win;
// }

// function total(e){
//    let upy = Array.from(document.getElementById('PRICE').children);
//    let values = [];
//    upy.forEach(ele => {
//        values.push(Number(ele.textContent));
//    });
//    let sum = 0;
//    for(i=0; i<values.length; i++){
//        sum = sum + values[i];
//    }
//    return sum;
// }
// function printing(){
//     let far = document.getElementById('none');
//     far.style.display = 'none';

//     let name = document.getElementById('NAME').value;
//     let branch = document.getElementById('selection').value;
//     let tag = document.getElementById('ORDER').innerHTML;
//     let a = new Date();
//     let blue = document.getElementById('PRICE').innerHTML;
//     let totality = total();

//     let bid = document.getElementsByName('pay');
//     for (checkbox of bid){
//         if (checkbox.checked){
//             let grim = checkbox.value;
//             document.getElementById('div1').innerHTML = "<h1 style='color:crimson; text-align:center; font-family:monospace'>WELCOME TO CHIZZY</h1>" + 
//                 "NAME: " + name + "<br>" + "DATE: " + a + "<br>" + "BRANCH: " + branch + "<br>" + "TRANSACTION : "+ grim  + "<br>" +
//                 "<table><thead><tr><th>PURCHASE</th><th>PRICE</th></tr></thead>" + "<tbody style='list-style:none;'><tr><td>"
//                 + tag + "</td>" + "<td>" + blue + "</td></tr>" + "<tr><td>" + "TOTAL = </td>" + "<td>" + totality + "</td></tr></tbody></table>" + "<br>" + "<h2 style='text-align:center;'>COME AGAIN!</h2>"+ "<br>";       
//         }
//     }
// }


// let section = document.querySelectorAll("section");
// let menu = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   section.forEach((i) => {
//     let top = window.scrollY;
//     let offset = i.offsetTop - 150;
//     let height = i.offsetHeight;
//     let id = i.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       menu.forEach((link) => {
//         link.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };

