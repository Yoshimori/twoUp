import React, { Component } from 'react';
import { inject, observer} from 'mobx-react'

@inject('ExpensesStore')
@observer

class Sum extends Component<any> {
    render() {
        const { ExpensesStore } = this.props
        
        return (
            <div>
                <h4>Sum: {ExpensesStore.getSum}  PLN ( {Math.round(ExpensesStore.getSum/ExpensesStore.pln * 100) / 100}EUR)</h4>
            </div>
        );
    }
}

export default Sum;