import React from 'react';
import Form from './components/Form';

class App extends React.Component {
    state={
        list: []
    }
    render() {
        return(
            <div>
                <Form />
            </div>
        )
    }
}

export default App