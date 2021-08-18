 function getInputValue(inputId){
    const inputfield = document.getElementById(inputId);
    const inputAmountText = inputfield.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
   inputfield .value ='';
   return amountValue;

 }

 function updateTotalField(totalFieldId,amount){
     
    const totalElement = document.getElementById(totalFieldId);

    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
 totalElement.innerText =    previousTotal+amount;
 }
function getCurrentBalance(){
    balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    return previousbalanceTotal;
}


function updateBalance(amount, issAdd){
    balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);
    const previousbalanceTotal = getCurrentBalance();
    if(issAdd==true){
        balanceTotal.innerText = previousbalanceTotal + depositAmount;
    }
    else{
        balanceTotal.innerText = previousbalanceTotal-depositAmount;
    }
}


document.getElementById('deposit-button').addEventListener('click',function(){
    // const inputfield = document.getElementById('deposit-input');
    // const inputAmountText = inputfield.value;
    // const amountValue = parseFloat(inputAmountText);
              

    // get current deposit total

// const totalElement = document.getElementById('deposit-total');

// const totalText = totalElement.innerText;
// const previousDipositTotal = parseFloat(totalText);
// totalElement.innerText =    previousDipositTotal+amountValue;
      
    // update balance deposit

//           balanceTotal = document.getElementById('balance-total');
//  const balanceTotalText = balanceTotal.innerText;
//  const previousbalanceTotal = parseFloat(balanceTotalText);
//  balanceTotal.innerText = previousbalanceTotal + amountValue;
const depositAmount = getInputValue('deposit-input');
if(depositAmount>0){
    updateTotalField('deposit-total',depositAmount);
    updateBalance(depositAmount,true);
     
}



});



    //    handle withdraw button
    document.getElementById('withdraw-button').addEventListener('click',function(){
        // const withdrawInput = document.getElementById('withdraw-input');
        // const withdrawAmountText = withdrawInput.value;
        // const withdrawAmount = parseFloat(withdrawAmountText);
        // Get current withdraw total

                // const withdrawTotal = document.getElementById('withdraw-total');

                // const withdrawTotalText = withdrawTotal.innerText;
                // const previouswithdrawTotal = parseFloat(withdrawTotalText);
                // withdrawTotal.innerText =  previouswithdrawTotal  + withdrawAmount;
     
             

                // update balance withdraw

//          const balanceTotal = document.getElementById('balance-total');
//          const balanceTotalText = balanceTotal.innerText;
//          const previousbalanceTotal = parseFloat(balanceTotalText);
// balanceTotal.innerText=previousbalanceTotal-withdrawAmount;
const withdrawAmount = getInputValue('withdraw-input');
const currentBalance = getCurrentBalance();
if(withdrawAmount>0 && withdrawAmount<currentBalance){
    updateTotalField('withdraw-total',withdrawAmount);                
    updateBalance(withdrawAmount,false);
}
if(withdrawAmount>currentBalance){
    console.log('You cannot withdraw more than what you have in your account')
}


          // clear input field
        //   withdrawInput .value ='';

    });
