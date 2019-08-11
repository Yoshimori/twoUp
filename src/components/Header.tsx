import React, { Component } from 'react';
import { inject, observer} from 'mobx-react'
import { css } from 'emotion'
//
import FlexJc from '../styles/Flex'

@inject('ExpensesStore')
@observer

class Header extends Component<any> {
    
    handleChange = (event:any) => {
        this.props.ExpensesStore.changePln(event.target.value)
    }
        
    render() {
        const { ExpensesStore } = this.props
        
        return (
            <FlexJc>
                <h2 className={css`margin: 0`}>List of expenses.</h2>
                <span>1EUR =  <input type="text" value={ExpensesStore.pln} onChange={this.handleChange} />PLN</span>

               
            </FlexJc>
        );
    }
}

export default Header;