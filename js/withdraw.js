document.getElementById('btn-withdraw').addEventListener('click', function(){

  

    const newWithdeawAmount = getInputFildValueById('withdraw-field');

// worning masage input in not Number

const worningMessage = document.getElementById('isNanWithdraw');

    if(isNaN(newWithdeawAmount)){
        worningMessage.innerText = 'Please Enter a Valid Amount.'
        return;
    }else{
        worningMessage.innerText = '';
       
    }
    
    const preveusWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithrawTotal = preveusWithdrawTotal + newWithdeawAmount;

    /// set balance
    const previousBalance = getTextElementValueById('balance-total');
    const courentBalance = previousBalance - newWithdeawAmount;


    if(previousBalance < newWithdeawAmount){
        worningMessage.innerText = 'Insufficient balance.'
        return
    }

    
    // set withraw total

    setElementValueById('withdraw-total', newWithrawTotal);


    setElementValueById('balance-total', courentBalance);

  

})