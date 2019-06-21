import React, { Component } from 'react';
import { inject, observer} from 'mobx-react'

import { css } from 'emotion'

import * as Cl from '../styles/Column'

@inject('ExpensesStore')
@observer

class List extends Component<any> {

    removeExpense = (name:string) => {
        this.props.ExpensesStore.removeExpense(name)
    }

    render() {
        const { ExpensesStore } = this.props

        return (
    
            <div>
                <Cl.ColumnWrapper className={css`background-color: #e0e2e5`}>
                    <Cl.Column__1>
                        Title
                    </Cl.Column__1>

                    <Cl.Column__2>
                        Amount(PLN)
                    </Cl.Column__2>

                    <Cl.Column__3>
                        Amount (EUR)
                    </Cl.Column__3>

                    <Cl.Column__4>
                        Options
                    </Cl.Column__4>
                </Cl.ColumnWrapper>
            
                <div>
                    
                    {ExpensesStore.expenses.map((expense:any, i:number) => (
                        <Cl.ColumnWrapper key={i}>
                            <Cl.Column__1>
                                {expense.name}
                            </Cl.Column__1>

                            <Cl.Column__2>
                                {expense.amount}
                            </Cl.Column__2>

                            <Cl.Column__3>
                                {Math.round(expense.amount/ExpensesStore.pln * 100) / 100}
                            </Cl.Column__3>

                            <Cl.Column__4>
                                <button 
                                    onClick={() => this.removeExpense(expense.name)}
                                >Delete</button>
                            </Cl.Column__4>
                        </Cl.ColumnWrapper>
                    ))}
                </div>
            </div>


        );
    }
}

export default List;