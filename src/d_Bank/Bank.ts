//You have been asked to create a banking application
//The bank can keep track of how much money it has, and how much it has loaned.
//Customers have a saving account, checking account, and need to be able to transfer money between the two.
//Customers need to be able to deposit and withdraw money
//Customers can also take out loans from the bank, and need to be able to view them
//The interest rate starts at 2.5% and doubles for every additional loan a customer takes out (but the other loans stay the same: loan 1 2.5%, loan 2 is 5%, etc)
//Robbers can come in an rob a customer at random (empty their accounts)
//Robinhood can come in and relieve a customer of their loans at random

class Bank {
	balance: number = 0;
	totalLoans: number = 0;
	customers: Customer[] = [];

	addCustomer(customer: Customer) {
		this.customers.push(customer);
	}

	issueLoan(customer: Customer, amount: number) {
		const loanInterestRate = 0.025 * Math.pow(2, customer.loans.length);
		customer.loans.push({ amount, interestRate: loanInterestRate });
		customer.checking.deposit(amount);
		this.totalLoans += amount;
		this.balance -= amount;
	}
}

interface Loan {
	amount: number;
	interestRate: number; // stored as a decimal (2.5% = 0.025)
}

abstract class Account {
	protected _balance: number = 0;

	deposit(amount: number) {
		this._balance += amount;
	}

	withdraw(amount: number): boolean {
		if (this._balance >= amount) {
			this._balance -= amount;
			return true;
		}
		return false;
	}

	get balance(): number {
		return this._balance;
	}

	empty() {
		this._balance = 0;
	}
}

class Saving extends Account {}
class Checking extends Account {}

class Customer {
	name: string;
	checking: Checking = new Checking();
	saving: Saving = new Saving();
	loans: Loan[] = [];

	constructor(name: string) {
		this.name = name;
	}

	depositToChecking(amount: number) {
		this.checking.deposit(amount);
	}

	depositToSaving(amount: number) {
		this.saving.deposit(amount);
	}

	withdrawFromChecking(amount: number): boolean {
		return this.checking.withdraw(amount);
	}

	withdrawFromSaving(amount: number): boolean {
		return this.saving.withdraw(amount);
	}

	transferToSaving(amount: number): boolean {
		if (this.checking.withdraw(amount)) {
			this.saving.deposit(amount);
			return true;
		}
		return false;
	}

	transferToChecking(amount: number): boolean {
		if (this.saving.withdraw(amount)) {
			this.checking.deposit(amount);
			return true;
		}
		return false;
	}

	viewLoans() {
		return this.loans.map(
			(loan, i) =>
				`Loan ${i + 1}: $${loan.amount} at ${(
					loan.interestRate * 100
				).toFixed(2)}% interest`
		);
	}

	totalDebt(): number {
		return this.loans.reduce((sum, loan) => sum + loan.amount, 0);
	}

	emptyAccounts() {
		this.checking.empty();
		this.saving.empty();
	}

	clearLoans() {
		this.loans = [];
	}
}

// Random events
function robCustomer(customer: Customer) {
	console.log(`${customer.name} got robbed!`);
	customer.emptyAccounts();
}

function robinhood(customer: Customer) {
	console.log(`Robinhood forgave ${customer.name}'s loans!`);
	customer.clearLoans();
}
