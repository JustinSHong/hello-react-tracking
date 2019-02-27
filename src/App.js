import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

class App extends Component {
    state = {
        users: [],
        error: ""
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                this.setState({ users: json });
            })
            .catch(err => {
                this.setState({ error: err });
            });
    }

    render() {
        const { users } = this.state;

        return (
            <Main>
                <h1>HELLO</h1>
            </Main>
        );
    }
}

export default App;
