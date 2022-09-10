let amount = document.querySelector('#amount')
let from = document.querySelector('#from')
let to = document.querySelector('#to')
let output = document.querySelector('#output')

let value = "";

fetch(' https://v6.exchangerate-api.com/v6/c74f57f7f57db1eb5483a0b1/latest/USD')
.then(response => response.json())
.then(data => {

    for(let key in data.conversion_rates){
        value +=  `<option value="${key}"> ${key}</option>`
    }

        // if(data.result) {
        //     value +=  `<option value="${key}"> ${key}</option>`
        // }else{
        //     value +=  `<option value="${key}"> ${key}</option>`
        // }
    // console.log(value)
    from.innerHTML=value;
    to.innerHTML= value
} )

.catch(error => console.log('error', error));

function convert(){

    fetch(`https://v6.exchangerate-api.com/v6/c74f57f7f57db1eb5483a0b1/pair/${from.value}/${to.value}`)
    .then(response => response.json())
    .then(data =>{

        output.value = amount.value * data.conversion_rate; 
        console.log(output.value)
    })
}