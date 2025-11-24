'use strict';
class BankAccount{
  #balance=0;
  deposit(a){ if(a>0) this.#balance+=a; }
  withdraw(a){
    if(a>this.#balance) throw new Error('Insufficient balance');
    this.#balance-=a;
  }
  getBalance(){ return this.#balance; }
}
const acc=new BankAccount();
acc.deposit(1000);
try{ acc.withdraw(2000); }catch(e){ console.error(e.message); }
console.log(acc.getBalance());
