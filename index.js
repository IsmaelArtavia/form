let form = document.querySelector('#form');
var cardNumber = document.querySelector("#cardNumber");
var cvc = document.querySelector('#cardCVC');
var amount = document.querySelector('#cardAmount');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(cardNumber.value.length < 16 || cardNumber.value.length > 16){
        cardNumber.style.border = "red 2px solid";
        alert('The card has 16 digits');
        cardNumber.style.border = "blue 3px solid";
    }
    else if(cvc.value.length < 3 || cvc.value.length > 3){
        cvc.style.border = "red 2px solid";
        alert('The cvc number must have 3 digits');
        cvc.style.border = "blue 3px solid";
    }

    else if(amount.value < 50 || cvc.value > 10000000){
        amount.style.border = "red 2px solid";
        alert('The amount must be greater than 50 and smaller than 10 000 000');
        amount.style.border = "blue 3px solid";
    }
    else{
        event.target.submit();
    };
    

    

});