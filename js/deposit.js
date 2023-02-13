document.getElementById('btn-deposit').addEventListener('click',function(){
    // current deposit amount
    const inputField=document.getElementById('input-field');
    const depositAmountString=inputField.value;
    const newDepositAmount=parseFloat(depositAmountString);
    inputField.value='';
    //valadation 
    if(isNaN(newDepositAmount)){
        alert('please provide a valid number');
        return;
    }
    
    //previous deposit amount
    const previousTotalDeposit=document.getElementById('deposit-total');
    const previousTotalDepositString=previousTotalDeposit.innerText;
    const previousTotalDepositAmount=parseFloat(previousTotalDepositString);
    
    // total deposit
    const currentDepositAmount= previousTotalDepositAmount+newDepositAmount;
    previousTotalDeposit.innerText=currentDepositAmount;

    //balance shit update
    const mainBalanceShit=document.getElementById('Balance-total');
    const mainBalanceShitString=mainBalanceShit.innerText;
    const newmainBalanceShit=parseFloat(mainBalanceShitString);
    
    // again update main balance
    const totalMainBalance=newmainBalanceShit+newDepositAmount;
    mainBalanceShit.innerText=totalMainBalance;

})