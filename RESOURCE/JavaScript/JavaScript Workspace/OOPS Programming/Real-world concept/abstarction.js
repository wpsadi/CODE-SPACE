function BankAccount(accountName,balance){
    let _balance = balance //private

    let _isAmount = function(){
        return typeof amount === 'number' && amount > 0 
    }

    this.deposit = function(amount){
        if (_isAmountValid(amount)){
            _balance = amount;
            console.log(`Deposit success, new balance is ${_balance}`)
        }
        else{
            console.log("Invalid amount")
        }
    }

    this.getBalance = function(){
        console.log(`Current balance is ${_balance}`)
    }
}