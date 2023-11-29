function Bankaccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
  }
  
  Bankaccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  Bankaccount.prototype.withdrawl = function (amount) {
    this.balance -= amount;
  };
  Bankaccount.prototype.checkbalance = function () {
    console.log(`Total Balance for ${this.name}'s account = ${this.balance}`);
  };

  Bankaccount.prototype.isactive = function () {
    if (this.balance >= 1) {
      console.log(`The Account is active, total amount deposited is = ${this.balance}`)
    return true
    } else {
      console.log("The Account is not active.");
    }
  };
  
  // adding data in the accounts
  let person_1 = new Bankaccount("12765", "Lionel Messi", "SAVING", 7684900);
  let person_2 = new Bankaccount("23876", "David Beckham", "SAVING", 8856780);
  
  // calculating the total
  
  let accounts = [person_1, person_2];
  
  function getTotalBalance(accounts) {
    let totalBalance = 0;
  
    for (let account of accounts) {
      if (account.isactive()) {
        totalBalance += account.balance;
      }
    }
  
    console.log(`The total balance of all the active accounts = ${totalBalance}`);
    return totalBalance;
  }

  // example
  person1.deposit(21);
  person1.withdrawl(10);
  person1.checkbalance();
  person1.isactive();
  
  getTotalBalance(accounts);