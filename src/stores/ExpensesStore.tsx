import { observable, action, computed } from 'mobx';

class ExpensesStore {
    @observable expenses:any = [];
    @observable pln:number = 4.382;

    @action addExpense = (expense:string, amount:string) => {
        this.expenses.push({
            name: expense,
            amount
        })
    }

    @action removeExpense = (name:any) => {
        let filtered = this.expenses.filter((expense:any) => expense.name !== name);
        this.expenses.replace(filtered);
    }

    @action changePln = (value:number) => {
        this.pln = value
    }

    @computed get expenseCount() {
        return this.expenses.length;
    }

    @computed get getSum() {
        let sum:number = 0;
        this.expenses.map((expense:any) => sum += +expense.amount )
        
        return sum
    }
}

const expensesStore:object = new ExpensesStore();
export default expensesStore;