document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFild = document.getElementById('deposit-field');
    const depositFildString = depositFild.value;
   const newDepositAmount = parseFloat(depositFildString);


   // if deposit NaN
   if(isNaN(newDepositAmount)){
    const alartDepositMessage = document.getElementById('isNanDeposit');
    alartDepositMessage.innerText = 'Please Enter a valid Amount'
    return
   }else{
    const alartDepositMessage = document.getElementById('isNanDeposit');
    alartDepositMessage.innerText = '';
   }

   // clean deposit fild
   depositFild.value = '';
   
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString);
   const currentDepositTotal = previousDepositTotal + newDepositAmount;
   depositTotalElement.innerText = currentDepositTotal;
   //5
   const balanceTotelElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotelElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
   balanceTotelElement.innerText = currentBalanceTotal;

})