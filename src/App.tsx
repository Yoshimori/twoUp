import React, { Component } from 'react';

import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import Sum from './components/Sum'

// styles
import Wrapper from './styles/Wrapper'



class App extends Component<any> {

    render() {
        return (
            <Wrapper>

                <Header/>
                
                <Form/>

                <List/>

                <Sum/>
                
            </Wrapper>
        )
    }
}

export default App