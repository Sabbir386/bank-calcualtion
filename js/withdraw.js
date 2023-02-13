document.getElementById('btn-Withdraw').addEventListener('click',function(){
    const withdrawAmount=document.getElementById('input-widthdraw-field');
    const withdrawAmountString=withdrawAmount.value;
    const newWithDrawAmount=parseFloat(withdrawAmountString);
    withdrawAmount.value='';
    //valadation 
    if(isNaN(newWithDrawAmount)){
        alert('please provide a valid number');
        return;
    }
    // previous get withdraw total

    const previousTotalWithdraw=document.getElementById('withdraw-total');
    const previousTotalWithdrawString=previousTotalWithdraw.innerText;
    const previousTotalWithdrawAmount=parseFloat(previousTotalWithdrawString);


    // update main balance shit amount

    const previousMainBalanceShit=document.getElementById('Balance-total');
    const previousMainBalanceShitString=previousMainBalanceShit.innerText;
    const newPreviousMainBalanceShit=parseFloat(previousMainBalanceShitString);
  //valadation 
    if(newWithDrawAmount>newPreviousMainBalanceShit){
        alert('exxeced amount');
        return;
    }
    //upadte withdraw

    const currentTotalWithdraw=previousTotalWithdrawAmount+newWithDrawAmount;
    previousTotalWithdraw.innerText=currentTotalWithdraw;
    
    // again update main balance shit amount
    const totalMainBalance=newPreviousMainBalanceShit-newWithDrawAmount;
    previousMainBalanceShit.innerText=totalMainBalance;

})

