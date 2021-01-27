let form = document.querySelector('#form');
var cardNumber = document.querySelector("#cardNumber");
var cvc = document.querySelector('#cardCVC');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(cardNumber.value.length<16 || cardNumber.value.length>16){
        alert('ESTA MAL')
    }
    else if(cvc.value.length<3 || cvc.value.length>3){
        alert('esta muy mal');
    }
    else{
        event.target.submit();
    };
    

    

});