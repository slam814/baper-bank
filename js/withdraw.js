document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFildElemnt = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawFildElemnt.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    

    if(isNaN(newWithdrawAmount)){
        const WorningMessage = document.getElementById('isNanWithdraw');
        WorningMessage.innerText = 'Please Enter a valid Amount';
        return
    }else{
        const WorningMessage = document.getElementById('isNanWithdraw');
        WorningMessage.innerText = '';
    }
    // clear withdraw
     withdrawFildElemnt.value = '';


     // add Total withdow
     const withdowTotalElement = document.getElementById('withdraw-total');
     const withdowTotalString = withdowTotalElement.innerText;
     const windowTotalAmount = parseFloat(withdowTotalString);
     const previousWithdrawTotal = newWithdrawAmount + windowTotalAmount;
     withdowTotalElement.innerText = previousWithdrawTotal;

     // Total balance
     const totalBalanceElement = document.getElementById('balance-total');
     const totalBalanceString = totalBalanceElement.innerText;
     const totalBalanceAmount = parseFloat(totalBalanceString);
     const totalBalance = totalBalanceAmount - newWithdrawAmount;
     totalBalanceElement.innerText = totalBalance;
})