import React, { Component } from 'react';
import { inject, observer} from 'mobx-react'

import FlexJc from '../styles/Flex'
import ButtonAdd from '../styles/Button'
import { css } from 'emotion'

@inject('ExpensesStore')
@observer

class Form extends Component<any> {
    
    state= {
        name: {
            value: '',
            errorText: ''
        },

        amount: {
            value: '',
        },
    }

    handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.ExpensesStore.addExpense(this.state.name.value, this.state.amount.value)
        this.setState({
            name: {
                value: '',
                errorText: ''
            },
    
            amount: {
                value: '',
            },
        })
    }

    handleName = (event:any) => {
        this.setState({
            name: {
               value: event.target.value
            }
        })
        this.handleError(event.target.value)
    }

    handleAmount = (event:any) => {
        let amountValue = event.target.value = event.target.value.toString().split(".").map((el:any,i:any)=>i?el.split("").slice(0,2).join(""):el).join(".").replace(/[^.,0-9]/gi, '');;
        this.setState({
            amount: {
                value: event.target.value
            }
           
        })
    }
    
    handleError = (value:any) => {
        if(value.length < 5) {
            this.setState({
                name: {
                    value: value,
                    errorText: 'min 5 characters'
                }
            })
        } 
    }


    render() {
        return (
            <div>
                <form action="" onSubmit={ e => this.handleSubmit(e) } autoComplete="false">
                        
                    <FlexJc>
                        <div>
                            <div className={css`width: 340px; display: flex; justify-content: space-between; margin-bottom: 25px; position:relative`}>
                                <label htmlFor="transaction-name">Title of transaction</label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="transaction-name"
                                    onChange={this.handleName}
                                    value={this.state.name.value}     
                                />

                            <span className={css`position: absolute;top: 23px;right: 0;color: red}`}>{this.state.name.errorText}</span>
                            </div>
        
                            
                            <div className={css`width: 340px; display: flex; justify-content: space-between`}>
                                <label htmlFor="transaction-amount">Amount (in PLN)</label>

                                <input 
                                    type="text"
                                    name="amount"
                                    id="transaction-amount"
                                    onChange={this.handleAmount}
                                    value={this.state.amount.value}     
                                />
                            </div>
                        </div>
                        
                        <ButtonAdd>Add</ButtonAdd>
                    </FlexJc>
                  

       
             
                </form>
            </div>
        );
    }
}

export default Form;