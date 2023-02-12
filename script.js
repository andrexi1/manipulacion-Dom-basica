//h1 {color:red}
//queryselector es igual que con css
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result');

//btn.addEventListener('click', sumaInputValues)

//con formularios es submit 
form.addEventListener('submit', sumaInputValues)

function sumaInputValues(event){
    console.log(event)
    event.preventDefault();
   const sumInputs = Number(input1.value)  + Number(input2.value) 
  pResult.innerText = "resultado " + sumInputs
}