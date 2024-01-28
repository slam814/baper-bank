document.getElementById('btn-deposit').addEventListener('click', function(){


const newDepositAmount =  getInputFildValueById('deposit-field');
// console.log(newDepositAmount);

// worning masage input in not Number

const worningMessage = document.getElementById('isNanDeposit');

    if(isNaN(newDepositAmount)){
        worningMessage.innerText = 'Please Enter a Valid Amount.'
        return;
    }else{
        worningMessage.innerText = '';
       
    }
    



const previusDepositAmount = getTextElementValueById('deposit-total');


const depositTotal = newDepositAmount + previusDepositAmount;

// set deposit Total value 

setElementValueById('deposit-total', depositTotal);

///

const previousTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousTotal + newDepositAmount;
setElementValueById('balance-total', newBalanceTotal);



//     // Get Input value
//     const inputFildElemnt = document.getElementById('deposit-field');
//     const inputDepositString = inputFildElemnt.value;
//     const newDepositAmount = parseFloat(inputDepositString);
    
// // worning masage input in not Number
// const worningMessage = document.getElementById('isNanDeposit');

//     if(isNaN(newDepositAmount)){
//       worningMessage.innerText = 'Please Enter a Valid Amount.'
//       return;
//     }else{
//         worningMessage.innerText ='';
//         inputFildElemnt.value = '';
//     }

//     // Add total deposit

//     const totalDepositElement = document.getElementById('deposit-total');
//     const totalDepositString = totalDepositElement.innerText;
//     const previusDepositAmount = parseFloat(totalDepositString);
//     const totalDepositAmount = previusDepositAmount + newDepositAmount;
//     totalDepositElement.innerText = totalDepositAmount;


//     // add total balance 

//     const totalBalanceElement = document.getElementById('balance-total');
//     const totalBalanceString = totalBalanceElement.innerText;
//     const totalBalanceAmount = parseFloat(totalBalanceString);
//     const totalBalance = totalBalanceAmount + newDepositAmount;
//     totalBalanceElement.innerText = totalBalance;
})