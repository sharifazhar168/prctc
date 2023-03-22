// // Original String 
// let cities = ["Khanewal", "Faisalabad", "lahore", "karachi", "Islamabad", "Rawalpindi", "Peshawar","Quetta" ]
// document.getElementById('originalstring').innerHTML = "<p>" +"1) " +cities[0]+" 2) " +cities[1]+" 3) " +cities[2]+" 4) " +cities[3]+" 5) " +cities[4]+"<br> 6) " +cities[5]+" 7) " +cities[6]+" 8) " +cities[7]+"<p/>"

// // clear btn 
// document.getElementById('button-addon2').onclick = function(){
//     document.getElementById('input').value = ""
// }
// // Simple Alert 

//  function simalert(){
//   let input = document.getElementById('input').value; 
//     if(!input){
//         alert("Please Enter Message ?")
//         return;
//     }
//     alert(input)
//     document.getElementById('output').innerHTML = input;
//     document.getElementById('clearoutputbtn').onclick = function(){
//         document.getElementById('output').innerHTML = ""    
//     }
// }

// // Print My Name 

// function printname(){
//     let input = document.getElementById('input').value; 
//     if(!input){
//         alert("Please Enter Your Name ?")
//         return;
//     }
    
//     document.getElementById('output').innerHTML = input;
//     document.getElementById('clearoutputbtn').onclick = function(){
//         document.getElementById('output').innerHTML = ""    
//     }
// }

// // Print All Cities 

// function printcities(){
//     document.getElementById("output").innerHTML = "";

//     for (let i = 0; i < cities.length; i++){
//         let num = i + 1;

//         document.getElementById('output').innerHTML  += num + " )" + cities[i] +'<br>' 

//     document.getElementById('clearoutputbtn').onclick = function(){
//         document.getElementById('output').innerHTML = ""    
//     }
    
    
// }
// }


// // Add your City 

// function addcity(){
//     document.getElementById("output").innerHTML = "";
//     let city = document.getElementById('input').value; 
//     if(!city){
//         alert("Please Enter Your City ?")
//         return;
//     }
//     cities.push(city)
//     document.getElementById('output').innerHTML = '<p>'+"<span style='color: green;'>" +'"'+ city +'"' + "</span>"+ ' is added in the list</p>'
    
//     document.getElementById('clearoutputbtn').onclick = function(){
//         document.getElementById('output').innerHTML = ""    
//     }
// }

// // Generate A Table

// function generatetable(){
//     document.getElementById("output").innerHTML = "";

//     let number = document.getElementById('input').value;

//     if(!number){
//         alert("Please Enter Number ?")
//         return;
//     }


//     for (let i = 1; i < 11; i++){
          
//         let table = i*number;
//         document.getElementById('output').innerHTML  += number + " x " + i +" ="+ table + '<br>' 

//     document.getElementById('clearoutputbtn').onclick = function(){
//         document.getElementById('output').innerHTML = ""    
//     }
//  }
// }

let addli = []

function addlist(){
    document.getElementById("output").innerHTML = "";
    const list = document.getElementById('input').value

    addli.push(list)

    for(let i = 0; i < addli.length; i++ ){
        document.getElementById('output').innerHTML += addli[i] + '<br>';
    }
}